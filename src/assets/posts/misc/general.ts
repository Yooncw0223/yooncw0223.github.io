import { process, extractFromvalue, extract } from '../util';

export const contentList = process({
  key: "Miscellaneous",
  value: [
    require('./introduction'),
  ]
});

export default function projectList() {
  return contentList;
}
