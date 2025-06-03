const { Client, APIErrorCode } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const getNotionPagesData = async (databaseId) => {
  try {
    const response = await notion.databases.query({ database_id: databaseId });
    const data = response.results.map((e) => e.properties);
    
    return data;
  } catch (error) {
    if (error.code === APIErrorCode.ObjectNotFound) {
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
