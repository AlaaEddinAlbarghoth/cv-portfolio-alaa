import siteData from '@/content/site.json';

export type SiteData = typeof siteData;

export type Personal = typeof siteData.personal;
export type Experience = typeof siteData.experience[0];
export type Project = typeof siteData.projects[0];
export type Skills = typeof siteData.skills;
export type Education = typeof siteData.education[0];

export function getSiteData(): SiteData {
  return siteData;
}

export function getPersonalInfo(): Personal {
  return siteData.personal;
}

export function getExperience(): Experience[] {
  return siteData.experience;
}

export function getProjects(): Project[] {
  return siteData.projects;
}

export function getSkills(): Skills {
  return siteData.skills;
}

export function getEducation(): Education[] {
  return siteData.education;
}
