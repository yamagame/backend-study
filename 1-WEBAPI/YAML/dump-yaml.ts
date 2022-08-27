/*
 * 実行例: npx ts-node ./dump-yaml.ts sample.yaml
 */
import YAML from "yaml";
import fs from "fs";

const mapToObject = (k: string, v: any) => {
  if (v instanceof Map) {
    return Object.fromEntries(v);
  }
  return v;
};

export function dumpYaml(filename: string) {
  const yaml = fs.readFileSync(filename, "utf-8");
  try {
    const result = YAML.parse(yaml);
    console.log(JSON.stringify(result, mapToObject, "  "));
  } catch (err) {
    const result = YAML.parseAllDocuments(yaml);
    console.log(JSON.stringify(result, mapToObject, "  "));
  }
}

function main(filename: string) {
  dumpYaml(filename);
}

if (require.main === module) {
  main(process.argv[2] || "sample.yaml");
}
