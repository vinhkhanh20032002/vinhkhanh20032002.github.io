# Khanh Portfolio (Astro)

Trang portfolio tĩnh: Hero, About, Certs, Projects (popup chi tiết), Labs (link sang Drive, có chip lọc), Writing (link sang Medium), Contact.

## Sửa nội dung

Mọi nội dung nằm trong `src/data/`. Bạn không cần đụng vào code.

| File | Dùng để |
| --- | --- |
| `labs.json` | Thêm lab mỗi ngày (xem bên dưới) |
| `articles.json` | Thêm bài Medium |
| `projects.json` | Nội dung card và popup của từng project |
| `certs.json` | Danh sách chứng chỉ (ảnh bằng để trong `public/certs/`) |
| `site.json` | Tên, giới thiệu, email, link LinkedIn / GitHub / Medium / CV |

### Thêm một lab mỗi ngày

Thêm một object ở **đầu** `labs.json`. Số ngày tự đếm, chip lọc tự sinh theo `category`.

```json
{
  "date": "Nov 4, 2026",
  "platform": "BTL1",
  "category": "Digital Forensics",
  "title": "Disk image analysis with FTK Imager",
  "summary": "Một câu nói bạn đã làm gì.",
  "tags": ["FTK Imager", "Forensics"],
  "url": "https://drive.google.com/..."
}
```

- `url` để trống thì dòng đó hiện "write-up coming soon".
- Dùng đúng một tên cho cùng một domain (luôn là `Digital Forensics`, đừng lúc viết `Forensics`).
- Drive nên để "Anyone with the link", quyền Viewer. Xuất PDF thì hiển thị ổn định hơn .docx.

### Thêm bài Medium

Thêm vào đầu `articles.json`:

```json
{
  "date": "Nov 2026",
  "readTime": "6 min read",
  "title": "Tiêu đề bài",
  "summary": "Một câu tóm tắt.",
  "tags": ["SIEM"],
  "url": "https://medium.com/..."
}
```

### Ảnh project, link CV

- Ảnh project: bỏ file vào `public/projects/` rồi điền `"image": "projects/ten-anh.png"` trong `projects.json`. Che IP thật, hostname, username trước khi đăng.
- CV: bỏ `Khanh-Resume.pdf` vào `public/` rồi điền `"resume": "Khanh-Resume.pdf"` trong `site.json`.
- Link để trống trong `site.json` thì nút đó tự ẩn.

### Đổi màu

Sửa `--accent` ở đầu `src/styles/global.css`.

## Chạy trên máy

```bash
npm install
npm run dev      # mở http://localhost:4321
npm run build    # kiểm tra build
```

## Deploy lên GitHub Pages

1. Tạo repo trên GitHub rồi push code lên nhánh `main`.
2. Sửa `astro.config.mjs`:
   - `site`: `https://<username-github>.github.io`
   - Nếu repo **không** tên `<username>.github.io` (ví dụ `portfolio`) thì bỏ comment dòng `base: '/portfolio'` và đổi cho đúng tên repo.
3. Trên GitHub: **Settings → Pages → Source: GitHub Actions**.
4. Mỗi lần push lên `main`, workflow `.github/workflows/deploy.yml` tự build và deploy. Xem tiến trình ở tab **Actions**.

## Còn là placeholder (tìm `[` trong `src/data/`)

- `projects.json`: các chỗ `[...]` trong overview, từng mục và outcome. Ảnh thumbnail.
- `certs.json`: `[DATE]` ngày thi CySA+.
- `site.json`: link LinkedIn, GitHub, Medium, resume.
- `labs.json`: ngày và link Drive của lab SSH.
- Ô "[Your next project]" trong `src/components/Projects.astro` và "[Next lab]" trong `Labs.astro`: giữ hoặc xóa tùy bạn.

## Lưu ý an toàn khi đăng

- Ảnh bằng đã che Candidate ID. Verification code vẫn hiện để recruiter tự kiểm tra ở verify.CompTIA.org.
- Che IP thật, hostname, token trong mọi screenshot trước khi đưa vào repo (repo public thì cả git history cũng public).
- Lab write-up chỉ ghi phương pháp, không đăng flag, đáp án hay nội dung exam.
