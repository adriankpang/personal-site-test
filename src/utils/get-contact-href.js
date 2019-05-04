// @flow
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://www.twitter.com/${contact}`;
      break;
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    case 'instagram':
      href = `https://www.instagram.com/edenadler/`;
      break;
    case 'linkedin':
      href = `https://www.linkedin.com/in/edenadler/`;
      break;
    case 'medium':
      href = `https://medium.com/@edenadler`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;