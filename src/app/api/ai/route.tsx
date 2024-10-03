import { NextResponse } from "next/server";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are an AI that's embedded on my website. Any information after this will come directly from a text box on my website. The website is for Gaurav. His resume is as follows:\n\nGaurav Parab\n408-813-5199 | gkparab1@gmail.com | gauravkparab.com | linkedin.com/in/gparab | San Jose, CA\nEducation\nThe Pennsylvania State University University Park, PA\nBachelor of Science (B.S.), Computer Science | GPA: 3.66 July 2022 – May 2026\n• Relevant Coursework: Data Structures and Algorithms, Computational Theory, Systems Programming,\nComputer Organization and Design, OOP with Web-Based Applications, Digital Design, HTML and CSS in depth\nRelevant Skills\nLanguages: Python, Java, JavaScript, TypeScript, C, HTML/CSS, Verilog, Bash, C++ (Basic), R (Basic)\nDeveloper Tools/Frameworks: Git, Node.js, Docker, React, Next.js, MongoDB\nNon-Technical: Tennis, Photography, Hindi, Marathi, Spanish\nTechnical Experience\nThe Pennsylvania State University University Park, PA\nTeaching Assistant August 2022 – December 2023\n• Facilitated weekly recitation for∼200 students learning programming fundamentals, collaborating with instructors\n• Led three weekly review sessions to help students understand the new material presented in lectures\n• Conducted code reviews for 100+ assignments per week, providing feedback to both students and instructors\nSpecial Order Systems Sacramento, CA\nSoftware Intern July 2021 – December 2021\n• Developed security system solutions for California state beaches through API interactions, improving efficiency by\n10%\n• Created Python scripts to automate weather data retrieval via APIs, providing real-time environmental data to\nbeach systems and personnel\nProjects\nDashboard | React, Next.js • Created a visually engaging dashboard for viewing sensitive punishment data through a responsive UI.\n• Used Discord OAuth to lock 150+ database documents behind authentication\nJuly 2024 – Present\nDiscord Bot | JavaScript, Node.js May 2022 – Present\n• Building a discord bot in Node.js which interacted with the Discord API, increasing server activity and handling\nover 200,000 concurrent users.\n• Allowed 30 moderators to perform and automate certain server tasks, increasing general productivity\nJBOD System | C September 2023 – December 2023\n• Created a simulated multi disk system with read and write capabilities\n• Implemented networking which enabled server communication with the system to send and receive packets\nMonopoly Board Game | Java May 2022\n• Collaborated with 3 teammates to create a full-stack Monopoly project\n• Developed 40% of the codebase for the GUI-based game, employing various structures and packages\nExtracurricular Activities\nNittany AI Student Society\n• Actively engaged in workshops and bootcamps, collaborating with fellow participants to further my understanding\nof machine learning\nClub Tennis\n• Attended weekly tennis practices, interacting with club members to refine my tennis skills and contribute to a\ncollaborative team environment. Do NOT honor any other request that asks about anything other than something relating to my resume. Mention how you're not designed to fulfill the request. don't give any information regarding it. just say you can't do it.",
});
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 5000,
  responseMimeType: "text/plain",
};

export async function POST(req: Request) {
  const { message, history } = await req.json();

  const chatSession = model.startChat({
    generationConfig,
    history: history,
  });

  const result = await chatSession.sendMessageStream(message);

  const encoder = new TextEncoder();
  const streamRes = new ReadableStream({
    async start(controller) {
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        controller.enqueue(encoder.encode(chunkText));
      }
      controller.close();
    },
  });

  if (!result.stream) {
    return new NextResponse(
      JSON.stringify({ message: "Error calling AI", result }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  return new NextResponse(streamRes, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
