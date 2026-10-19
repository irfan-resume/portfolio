import travelImage from '../assets/images/projects/travel-booking-platform.jpg';
import kaizenImage from '../assets/images/projects/hmel-kaizen-portal.jpg';
import barbadosImage from '../assets/images/projects/barbados-job-register.jpg';
import policyxImage from '../assets/images/projects/policyx-insurance-platform.jpg';

/** `tone` picks the card accent (red | blue | violet | green). */
export const projects = [
  {
    name: 'Travel Booking Platform',
    kind: 'Product Design · Frontend',
    role: 'UI/UX Designer',
    industry: 'Travel',
    focus: 'Complex transactional flows',
    tone: 'red',
    image: travelImage,
  },
  {
    name: 'HMEL Kaizen Portal',
    kind: 'Enterprise Product · UX',
    role: 'UI/UX Designer',
    industry: 'Enterprise',
    focus: 'Workflow clarity',
    tone: 'blue',
    image: kaizenImage,
  },
  {
    name: 'ITS Barbados',
    kind: 'Mobile App · UX/UI',
    role: 'UI/UX Designer',
    industry: 'Government',
    focus: 'Step-by-step mobile experience',
    tone: 'violet',
    image: barbadosImage,
  },
  {
    name: 'PolicyX Insurance Platform',
    kind: 'Web · CRM',
    role: 'UI/UX Designer',
    industry: 'Insurance',
    focus: 'Simplifying complex information',
    tone: 'green',
    image: policyxImage,
  },
];
