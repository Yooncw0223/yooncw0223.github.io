
// just some syntactic sugar to pipeline things


export const process = (contents) => {
  return {
    key: contents.key,
    value: extractFromValue(contents.value)
  }
};

export const extractFromValue = (itemList) => {
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

export const extract = (item: Object) => item.content;

export const isSubdir = (candidate) => typeof candidate === 'object' &&
                                !Array.isArray(candidate) &&
                                candidate !== null &&
                                "key" in candidate;


