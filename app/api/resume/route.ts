import { getSiteData } from '@/lib/data';

export async function GET() {
  const data = getSiteData();
  
  const resume = {
    basics: {
      name: data.personal.name,
      label: data.personal.title,
      email: data.personal.email,
      phone: data.personal.phone,
      url: data.personal.github,
      summary: data.personal.summary,
      location: {
        city: 'Istanbul',
        countryCode: 'TR',
        region: 'Turkey',
      },
      profiles: [
        {
          network: 'GitHub',
          username: 'AlaaEddinAlbarghoth',
          url: data.personal.github,
        },
      ],
    },
    work: data.experience.map(exp => ({
      name: exp.company,
      position: exp.title,
      startDate: exp.period.split(' - ')[0],
      endDate: exp.period.split(' - ')[1],
      highlights: exp.highlights,
    })),
    education: data.education.map(edu => ({
      institution: edu.institution,
      studyType: edu.degree,
      endDate: edu.year,
      status: edu.status,
    })),
    skills: Object.entries(data.skills).flatMap(([category, items]) =>
      items.map(skill => ({
        name: skill,
        level: 'Advanced',
        keywords: [category],
      }))
    ),
    projects: data.projects.map(project => ({
      name: project.name,
      description: project.description,
      highlights: project.tech || [],
      startDate: project.period.split(' – ')[0] || '',
      endDate: project.period.split(' – ')[1] || '',
    })),
  };

  return Response.json(resume);
}
