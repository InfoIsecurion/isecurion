const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const contactForm = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (!response.ok) {
      return {
        status: response.status,
        success: false,
        message: result.message || "Failed to submit contact form.",
        errors: result.errors,
      };
    }

    return {
      status: response.status,
      success: true,
      message: result.message || "Your message has been sent successfully.",
    };
  } catch (error: unknown) {
    return {
      status: 500,
      success: false,
      message:
        error instanceof Error ? error.message : "Internal server error.",
    };
  }
};

// this is for aiAugamented

export const aiAugamented = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/ai-augamented`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
      status: response.status,
      success: true,
      message:
        result.message ||
        "Thank you for contacting ISECURION! Our team will get back to you soon.",
    };
  } catch (error: unknown) {
    return {
      status: 500,
      message:
        error instanceof Error ? error.message : "Internal server error.",
    };
  }
};
// this is for breach attack simulation
export const breachAttackSimulation = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/breach-attacksimulation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        message: result.message || "Failed to submit contact form.",
      };
    }
    return {
      status: response.status,
      message:
        result.message ||
        "Thank you for contacting ISECURION! Our team will get back to you soon.",
    };
  } catch (error: unknown) {
    return {
      status: 500,
      message:
        error instanceof Error ? error.message : "Internal server error.",
    };
  }
};

export const redTeamAssessment = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/red-teamassement`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        message: result.message || "Failed to submit contact form.",
      };
    }
    return {
      status: response.status,
      message:
        result.message ||
        "Thank you for contacting ISECURION! Our team will get back to you soon.",
    };
  } catch (error: unknown) {
    return {
      status: 500,
      message:
        error instanceof Error ? error.message : "Internal server error.",
    };
  }
};

// this is for dpo services
export const dpoServices = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/dpo-services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        message: result.message || "Failed to submit contact form.",
      };
    }
    return {
      status: response.status,
      message:
        result.message ||
        "Thank you for contacting ISECURION! Our team will get back to you soon.",
    };
  } catch (error: unknown) {
    return {
      status: 500,
      message:
        error instanceof Error ? error.message : "Internal server error.",
    };
  }
};

export const dpdp = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/dpo-services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        message: result.message || "Failed to submit contact form.",
      };
    }
    return {
      status: response.status,
      message:
        result.message ||
        "Thank you for contacting ISECURION! Our team will get back to you soon.",
    };
  } catch (error: unknown) {
    return {
      status: 500,
      message:
        error instanceof Error ? error.message : "Internal server error.",
    };
  }
};

export const vcsio = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/vciso-services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        message: result.message || "Failed to submit contact form.",
      };
    }
    return {
      status: response.status,
      message:
        result.message ||
        "Thank you for contacting ISECURION! Our team will get back to you soon.",
    };
  } catch (error: unknown) {
    return {
      status: 500,
      message:
        error instanceof Error ? error.message : "Internal server error.",
    };
  }
};

export const iso27001api = async (data) => {
  try {
    const response = await fetch(`${API_URL}/api/iso27001`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        status: response.status,
        message: result.message || "Failed to submit contact form.",
      };
    }
    return {
      status: response.status,
      message:
        result.message ||
        "Thank you for contacting ISECURION! Our team will get back to you soon.",
    };
  } catch (error: unknown) {
    return {
      status: 500,
      message:
        error instanceof Error ? error.message : "Internal server error.",
    };
  }
};
