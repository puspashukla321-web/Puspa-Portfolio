import PDFDocument from "pdfkit";
import { DATA } from "@/data/resume";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const document = new PDFDocument({ size: "LETTER", margin: 48 });
  const chunks: Buffer[] = [];
  const pdfReady = new Promise<Buffer>((resolve, reject) => {
    document.on("data", (chunk: Buffer) => chunks.push(chunk));
    document.on("end", () => resolve(Buffer.concat(chunks)));
    document.on("error", reject);
  });

  const contentWidth =
    document.page.width - document.page.margins.left - document.page.margins.right;
  const addSection = (title: string) => {
    document.moveDown(0.5);
    document.font("Helvetica-Bold").fontSize(11).fillColor("#111111");
    document.text(title.toUpperCase());
    const ruleY = document.y + 3;
    document
      .moveTo(document.page.margins.left, ruleY)
      .lineTo(document.page.width - document.page.margins.right, ruleY)
      .lineWidth(0.6)
      .strokeColor("#333333")
      .stroke();
    document.moveDown(0.5);
    document.font("Helvetica").fontSize(9.5).fillColor("#222222");
  };
  const addBullet = (text: string) => {
    document.text(`- ${text}`, { indent: 10, paragraphGap: 2, width: contentWidth - 10 });
  };

  document.font("Helvetica-Bold").fontSize(19).fillColor("#111111");
  document.text(DATA.name.toUpperCase(), { align: "center" });
  document.moveDown(0.25);
  document.font("Helvetica").fontSize(9).fillColor("#333333");
  document.text(
    `${DATA.location} | ${DATA.contact.email} | ${DATA.contact.tel}`,
    { align: "center" },
  );
  document.fillColor("#145c9e").text("LinkedIn profile", {
    align: "center",
    link: DATA.contact.social.LinkedIn.url,
    underline: true,
  });
  document.text("GitHub profile", {
    align: "center",
    link: DATA.contact.social.GitHub.url,
    underline: true,
  });
  document.text("X profile", {
    align: "center",
    link: DATA.contact.social.X.url,
    underline: true,
  });
  document.fillColor("#222222");

  addSection("Professional Summary");
  document.text(DATA.professionalSummary, { lineGap: 2 });

  addSection("Skills");
  for (const group of DATA.skillGroups) {
    document.font("Helvetica-Bold").text(`${group.label}: `, { continued: true });
    document.font("Helvetica").text(group.items);
  }

  addSection("Work Experience");
  for (const role of DATA.work) {
    document.font("Helvetica-Bold").text(`${role.company} - ${role.title}`);
    document.font("Helvetica");
    for (const item of role.work) addBullet(item);
    if (role.tools.length > 0) {
      document.font("Helvetica-Bold").text("Tools Used: ", { continued: true });
      document.font("Helvetica").text(role.tools.join(", "));
    }
    document.moveDown(0.25);
  }

  addSection("Projects");
  for (const project of DATA.projects) {
    document.font("Helvetica-Bold").text(`${project.title}: `, { continued: true });
    document.font("Helvetica").text(project.description);
  }

  addSection("Education");
  for (const education of DATA.education) {
    document.font("Helvetica-Bold").text(education.school, { continued: true });
    document.font("Helvetica").text(
      ` | ${education.program} (${education.specialization}) | ${education.start}-${education.end}`,
    );
    for (const detail of education.details) addBullet(detail);
    if ("highlights" in education) {
      for (const highlight of education.highlights) addBullet(highlight);
    }
  }

  addSection("Achievements & Recognition");
  for (const achievement of DATA.hackathonsAndEvents) {
    document.font("Helvetica-Bold").text(`${achievement.title}${achievement.dates ? ` (${achievement.dates})` : ""}: `, { continued: true });
    document.font("Helvetica").text(achievement.description);
  }

  document.end();
  const pdf = await pdfReady;

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Puspa-Shukla-Resume.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
