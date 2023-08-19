
// this is a file to keep track of static contents (blogs)
// contentManage delivers the pointers, and 

import * as projects from './projects/general';
import * as papers from './papers/general';
import * as misc from './misc/general';

export default function serve() {
  console.log(projects)
  const archive = {
    projects: projects,
    papers: papers,
    misc: misc
  }

  return archive;
}


