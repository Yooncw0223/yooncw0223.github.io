
// just some syntactic sugar to pipeline things


const process = (contents) => {
  return {
    key: contents.key,
    value: extractFromValue(contents.value)
  }
};

const extractFromValue = (itemList) => {
  const result = [];
  for (const item of itemList) {
    if (isSubdir(item)) {
      result.push(process(item));
    } else {
      result.push(extract(item));
    }
  }
  return result;
}

const extract = (item: Object) => item.content;

const isSubdir = (candidate) => typeof candidate === 'object' &&
                                !Array.isArray(candidate) &&
                                candidate !== null &&
                                "key" in candidate;

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
