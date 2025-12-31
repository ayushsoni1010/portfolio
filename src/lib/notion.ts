import { Client, APIErrorCode } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const getNotionPagesData = async (databaseId: string) => {
  try {
    const response = await notion.databases.query({ database_id: databaseId });
    const data = response.results
      .map((e) => {
        if ("properties" in e) {
          return e.properties;
        }
        return null;
      })
      .filter(Boolean);

    return data;
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === APIErrorCode.ObjectNotFound
    ) {
      //
      // For example: handle by asking the user to select a different database
      //
    } else {
      // Other error handling code
      console.error(error);
    }
  }
};

export { getNotionPagesData };
