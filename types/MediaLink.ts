enum mediaLinkType {
  LINKEDIN,
  GITHUB,
  FACEBOOK,
  PERSONALWEB,
}

interface MediaLink {
  url: String;
  type: mediaLinkType;
}

export default MediaLink;
