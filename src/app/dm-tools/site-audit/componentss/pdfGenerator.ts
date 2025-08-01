// src/app/dm-tools/site-audit/componentss/pdfGenerator.ts
import { jsPDF } from 'jspdf';

export const generatePdfReport = (auditResults: any) => {
  const doc = new jsPDF();

  doc.setFont('helvetica', 'normal');
  doc.text('SEO Site Audit Report', 14, 22);
  doc.text('------------------------', 14, 30);

  // SEO Results
  doc.text('SEO Results:', 14, 40);
  doc.text(`Title: ${auditResults.seoResults.title}`, 14, 50);
  doc.text(`Meta Description: ${auditResults.seoResults.metaDescription}`, 14, 60);
  doc.text(`H1 Tag: ${auditResults.seoResults.h1Tag}`, 14, 70);

  // Performance Results
  doc.text('Performance Results:', 14, 80);
  doc.text(`Performance Score: ${auditResults.performanceResults.performanceScore}`, 14, 90);

  // Save the PDF
  doc.save('SEO-Audit-Report.pdf');
};
