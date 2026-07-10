# Form → Google Sheets + PostHog — hướng dẫn kích hoạt (~7 phút)

Trang đã được wire sẵn. Cả form "Bring one live deal" và ô newsletter (cả 3 trang) đều gửi về **một endpoint duy nhất**, và analytics là PostHog. Chỉ cần điền 2 giá trị vào [`assets/ml-config.js`](assets/ml-config.js):

```js
window.ML = {
  LEAD_ENDPOINT: '',   // ← dán URL Apps Script (bước A)
  POSTHOG_KEY: '',     // ← dán key PostHog (bước B)
  POSTHOG_HOST: 'https://us.i.posthog.com'
};
```

Khi cả hai còn trống: form vẫn validate + hiện xác nhận tại chỗ (không mất gì), analytics không load. Điền xong → commit + push là chạy.

---

## A. Form → Google Sheets (Apps Script) — ~5 phút

1. Vào [sheets.new](https://sheets.new) → đặt tên **MindLab Leads**.
2. Menu **Extensions → Apps Script** → xoá code mẫu, dán toàn bộ code dưới đây → Save (⌘S):

```js
/** MindLab landing — nhận lead + newsletter, ghi vào Sheet này, email báo về NOTIFY_EMAIL. */
const NOTIFY_EMAIL = 'duy@mindlab.io';

function doPost(e) {
  try {
    const d = JSON.parse((e.postData && e.postData.contents) || '{}');
    if (d.hp) return out_({ ok: true }); // honeypot: bot điền field ẩn → giả vờ thành công, không ghi gì
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    if (d.type === 'newsletter') {
      sheet_(ss, 'Newsletter', ['Time', 'Email', 'Page'])
        .appendRow([new Date(), String(d.email || ''), String(d.page || '')]);
    } else {
      sheet_(ss, 'Leads', ['Time', 'Name', 'Firm', 'Role', 'Email', 'Workflow', 'Page'])
        .appendRow([new Date(), String(d.name || ''), String(d.firm || ''), String(d.role || ''),
                    String(d.email || ''), String(d.workflow || ''), String(d.page || '')]);
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: 'New MindLab lead — ' + (d.name || d.email || 'unknown'),
        body: [
          'Name: ' + (d.name || ''), 'Firm: ' + (d.firm || ''), 'Role: ' + (d.role || ''),
          'Email: ' + (d.email || ''), 'Workflow: ' + (d.workflow || ''), 'Page: ' + (d.page || ''),
          '', 'Sheet: ' + ss.getUrl()
        ].join('\n')
      });
    }
    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  }
}

function sheet_(ss, name, headers) {
  let sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); sh.appendRow(headers); sh.setFrozenRows(1); }
  return sh;
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
```

3. Nút **Deploy → New deployment** → bấm bánh răng chọn type **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone** (bắt buộc — để trang web gọi được; "Anyone" ở đây chỉ có nghĩa là ai cũng POST được vào endpoint, không ai xem được Sheet)
4. **Deploy** → Google hiện màn hình xin quyền → **Authorize access** → chọn account → nếu hiện "Google hasn't verified this app" thì bấm **Advanced → Go to … (unsafe)** (an toàn — app này là code của chính anh) → **Allow**.
5. Copy **Web app URL** (dạng `https://script.google.com/macros/s/…/exec`) → dán vào `LEAD_ENDPOINT` trong `assets/ml-config.js` (hoặc gửi URL cho tôi, tôi dán + verify).

> Lưu ý: mỗi lần sửa code Apps Script phải **Deploy → Manage deployments → Edit → New version** thì URL cũ mới nhận code mới.

**Test sau khi push:** mở trang live → điền form → kiểm tra tab `Leads` trong Sheet + email về duy@mindlab.io. Thử cả ô Subscribe ở footer → tab `Newsletter`.

## B. Analytics → PostHog — ~2 phút

1. Đăng ký [posthog.com](https://posthog.com) (chọn **US Cloud**; nếu chọn EU thì sửa thêm `POSTHOG_HOST` thành `https://eu.i.posthog.com`).
2. Sau khi tạo project: **Settings → Project → Project API key** (dạng `phc_…`).
3. Dán vào `POSTHOG_KEY` trong `assets/ml-config.js` (hoặc gửi tôi).

Đã gắn sẵn các event, vào PostHog là thấy:

| Event | Ý nghĩa |
|---|---|
| `$pageview` (tự động) | Ai vào trang nào (cả 3 trang), kèm nguồn traffic |
| autocapture (tự động) | Mọi click — CTA nào được bấm nhiều |
| `lead_form_submitted` | Form lead gửi thành công (kèm workflow được chọn) |
| `lead_form_invalid` | Bấm submit nhưng thiếu/sai field — thấy form "rớt" ở đâu |
| `lead_form_error` | Gửi thất bại (mạng/endpoint) — nếu số này > 0 là có chuyện |
| `newsletter_subscribed` | Đăng ký newsletter thành công |

Free tier 1M events/tháng — landing page dùng thoải mái. Không gửi PII (tên/email không đưa vào analytics, chỉ nằm trong Google Sheet).
