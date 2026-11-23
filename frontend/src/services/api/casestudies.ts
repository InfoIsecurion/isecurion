const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCaseStudies = async () => {
  try {
    const response = await fetch(`${API_URL}/api/case-studies/get-all`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        message: result.message || "Failed to submit contact form.",
        errors: result.errors,
      };
    }
    return {
      data: result.data,
      status: response.status,
      message: result.message || "Your message has been sent successfully.",
    };
  } catch (error: unknown) {
    return {
      status: 500,
      message:
        error instanceof Error ? error.message : "Internal server error.",
    };
  }
};
