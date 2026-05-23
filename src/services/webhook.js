/**
 * TP Media Recruitment Webhook Dispatcher
 * Sends structured application embeds directly to Discord channels.
 */

// Helper to convert HEX colors to Decimal for Discord embeds
const hexToDecimal = (hex) => {
  return parseInt(hex.replace("#", ""), 16);
};

export const sendApplicationWebhook = async (formData) => {
  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
  
  // Dynamic Webhook Logo configuration from Env
  // Discord requires an absolute public URL to render images correctly
  const logoUrl = import.meta.env.VITE_LOGO_URL || "https://media.discordapp.net/attachments/1486911162208485377/1486911614224564365/MARK_YOUR_PRESENCE_I_WILL_BE_THERE_1.png";

  // Formulate the rich Discord Embed matching exact requested fields
  // Includes pings in the top-level 'content' string for instant alerts
  const embedPayload = {
    username: "Tamil Pasanga Media Recruitment",
    avatar_url: logoUrl, // Webhook Profile Avatar
    content: "<@&1273150012422881341>", // Tag Role Only
    embeds: [
      {
        title: "🏎️ NEW MEDIA TEAM APPLICATION",
        description: `A new candidate has submitted an application to join the **Tamil Pasanga Media** crew!`,
        color: hexToDecimal("#E60000"), // Brand racing-red
        timestamp: new Date().toISOString(),
        thumbnail: {
          url: logoUrl // Embed thumbnail
        },
        fields: [
          {
            name: "👤 Full Name",
            value: `\`${formData.name}\``,
            inline: true
          },
          {
            name: "🆔 Discord ID / Tag",
            value: `\`${formData.discordTag}\``,
            inline: true
          },
          {
            name: "📅 Age",
            value: `\`${formData.age} Years\``,
            inline: true
          },
          {
            name: "🚛 Part of Tamil Pasanga VTC?",
            value: formData.isVTCMember ? "✅ **Yes**" : "❌ **No**",
            inline: true
          },
          {
            name: "🔗 Part of Other VTC?",
            value: formData.isOtherVTCMember ? "✅ **Yes**" : "❌ **No**",
            inline: true
          },
          {
            name: "🕹️ TruckersMP Profile Link",
            value: formData.truckersmp.trim() || "*No profile link supplied*",
            inline: false
          },
          {
            name: "📁 Previous Works (Google Drive / Portfolio)",
            value: formData.portfolio.trim() || "*No showcase link supplied*",
            inline: false
          },
          {
            name: "📜 Agreed to Terms & Conditions of TP Media?",
            value: formData.agreeTerms ? "✅ **Yes, I Agree**" : "❌ **No**",
            inline: true
          },
          {
            name: "💬 Why do you want to join? (Optional Message)",
            value: formData.motivation.trim() ? `>>> ${formData.motivation.trim()}` : "*No custom message provided*",
            inline: false
          }
        ],
        footer: {
          text: "TP Media Recruitment Portal",
          icon_url: logoUrl
        }
      }
    ]
  };

  // If no environment variable is configured, we run in Developer Sandbox Mode
  if (!webhookUrl) {
    console.warn("⚠️ VITE_DISCORD_WEBHOOK_URL is not configured. Simulating dispatch in Dev Mode.");
    console.log("Payload:", embedPayload);
    
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
      success: true,
      mode: "sandbox",
      payload: embedPayload
    };
  }

  // Shoot POST request to Discord Webhook
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(embedPayload),
    });

    if (response.ok) {
      return { success: true, mode: "live" };
    } else {
      const errorText = await response.text();
      throw new Error(`Discord Webhook responded with error: ${response.status} - ${errorText}`);
    }
  } catch (error) {
    console.error("❌ Webhook dispatch failed:", error);
    return { success: false, error: error.message };
  }
};
