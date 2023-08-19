

export default function contentManage() {
  const archive = {
    project: await import("./projects/general"),
    papers: await import("./papers/general"),
    misc: await import("./misc/general"),
  }
}

