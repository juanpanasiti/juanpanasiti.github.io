export const getAllProjects = `query AllProjects {
    allProjects {
      techonologies
      title
      kind
      gitLink
      demoLink
      summary
      projectStatus
      frontImage {
        url
      }
    }
  }
  `;
