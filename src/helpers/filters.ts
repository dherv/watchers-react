export const sortByDate = (
  data: any[],
  key: string,
  sort: "asc" | "desc" = "asc"
) =>
  data.sort((a, b) => {
    return sort.toLowerCase() === "asc"
      ? Date.parse(b[key]) - Date.parse(a[key])
      : Date.parse(a[key]) - Date.parse(b[key]);
  });

export const sortByNumber = (
  data: any[],
  key: string,
  sort: "asc" | "desc" = "asc"
) =>
  data.sort((a, b) =>
    sort.toLowerCase() === "asc" ? b[key] - a[key] : a[key] - b[key]
  );

export const sortByString = (
  data: any[],
  key: string,
  sort: "asc" | "desc" = "asc"
) =>
  data.sort(
    (a, b): number =>
      sort.toLowerCase() === "asc"
        ? b[key]
            .replace(/^(a|the) /i, "")
            .localeCompare(a[key].replace(/^(a|the) /i, ""))
        : a[key]
            .replace(/^(a|the) /, "")
            .localeCompare(b[key].replace(/^(a|the) /i, ""))
  );
