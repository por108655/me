
const contactForm = document.getElementById("contactForm");
const statusMessage = document.getElementById("status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        statusMessage.textContent = "กรุณากรอกข้อมูลให้ครบทุกช่องครับ";
        return;
    }

    const recipient = "por108655@gmail.com";
    const subject = `ข้อความจากเว็บไซต์ - ${name}`;

    const body = [
        `ชื่อผู้ส่ง: ${name}`,
        `อีเมลผู้ส่ง: ${email}`,
        "",
        "ข้อความ:",
        message
    ].join("\n");

    const mailtoLink =
        `mailto:${recipient}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    statusMessage.textContent =
        "กำลังเปิดโปรแกรมอีเมล กรุณาตรวจสอบข้อความและกดส่งอีกครั้งครับ 💌";

    window.location.href = mailtoLink;
});
