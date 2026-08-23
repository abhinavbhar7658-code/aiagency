import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
 const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ||"https://dwd.agency";

 const staticRoutes = ["","/services","/ai-agents","/industries","/how-it-works","/about","/contact","/book-call","/security","/privacy","/terms",
 ].map((route) => ({
 url: `${baseUrl}${route}`,
 lastModified: new Date(),
 changeFrequency:"weekly" as const,
 priority: route ==="" ? 1.0 : 0.8,
 }));

 const serviceRoutes = servicesData.map((service) => ({
 url: `${baseUrl}/services/${service.slug}`,
 lastModified: new Date(),
 changeFrequency:"weekly" as const,
 priority: 0.9,
 }));

 const industryRoutes = industriesData.map((industry) => ({
 url: `${baseUrl}/industries/${industry.slug}`,
 lastModified: new Date(),
 changeFrequency:"monthly" as const,
 priority: 0.8,
 }));

 return [
 ...staticRoutes,
 ...serviceRoutes,
 ...industryRoutes,
 ];
}
