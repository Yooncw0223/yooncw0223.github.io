import { process, extractFromvalue, extract } from '../util';

export const contentList = process({
  key: "Projects",
  value: [
    require('./introduction'),
    require('./website'),
    {
      key: "subject",
      value: [
        require('./test1'),
        require('./test2')
      ]
    }
  ]
});

export default function projectList() {
  return contentList;
}
