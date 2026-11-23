const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getBlogs = async () => {
  try {
    const response = await fetch(`${API_URL}/api/blog/get-all`, {
      method: "GET",
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        message: result.message || "Failed to fetch blogs.",
        data: [],
      };
    }

    return {
      data: result.data || [],
      status: response.status,
      message: result.message || "Blogs fetched successfully.",
    };
  } catch (error: unknown) {
    return {
      status: 500,
      message:
        error instanceof Error ? error.message : "Internal server error.",
      data: [],
    };
  }
};
