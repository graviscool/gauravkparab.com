"use client";
import React, { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin } from "lucide-react";
import ContactNavbar from "../components/ContactNavbar";
import emailjs from "@emailjs/browser";
import styles from "@/styles/Contact.module.css";
import { CardImg } from "react-bootstrap";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Contact() {
  const [isDark, setIsDark] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setIsDark(savedMode ? JSON.parse(savedMode) : true);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(event.currentTarget);

    try {
      await emailjs.send(
        "contact_send",
        "template_contact",
        {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        },
        { publicKey: "BgT2UkxSM0t0kALG6" }
      );
      setSubmitStatus("success");
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <link rel="preload" href="/images/profPhoto.png" as="image" />
      </Head>
      <title>Contact - Gaurav Parab</title>
      <ContactNavbar />
      <div
        className={`min-h-screen ${
          isDark ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900"
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-info">
            Let&apos;s Connect!
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information Card */}
            <Card className={isDark ? "bg-slate-800" : "bg-white"}>
              <CardHeader>
                <CardTitle className={`text-2xl ${isDark ? "text-light" : ""}`}>
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Mail className={`h-5 w-5 ${isDark ? "text-light" : ""}`} />
                    <a
                      href="mailto:gkparab1@gmail.com"
                      className={styles.linkStyle}
                    >
                      gkparab1@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Linkedin
                      className={`h-5 w-5 ${isDark ? "text-light" : ""}`}
                    />
                    <a
                      href="https://linkedin.com/in/gparab"
                      target="_blank"
                      rel="noreferrer noopener"
                      className={styles.linkStyle}
                    >
                      linkedin.com/in/gparab
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`${styles.contactCard} ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <CardHeader>
                <CardTitle className={`text-2xl ${isDark ? "text-light" : ""}`}>
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className={isDark ? "text-light" : ""}
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className={
                          isDark ? "bg-slate-700 text-light" : "bg-slate-100"
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className={isDark ? "text-light" : ""}
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={
                          isDark ? "bg-slate-700 text-light" : "bg-slate-100"
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className={isDark ? "text-light" : ""}
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className={
                        isDark ? "bg-slate-700 text-light" : "bg-slate-100"
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : <>Send Message</>}
                  </Button>
                </form>
                {submitStatus === "success" && (
                  <Alert className="mt-4 bg-green-500/20 text-green-500">
                    <AlertDescription>
                      Your contact request was sent successfully! Keep an eye on
                      your email.
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === "error" && (
                  <Alert className="mt-4 bg-red-500/20 text-red-500">
                    <AlertDescription>
                      Failed to send message. Please try again or use an
                      alternate contact method.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="container pb-3">
          <Card
            className={`${
              isDark ? "bg-slate-800" : "bg-white"
            } w-full mt-2 p-3 shadow-lg rounded-lg`}
          >
            <div className="flex items-center">
              <CardImg
                src="/images/profPhoto.png"
                style={{ width: "15%", marginRight: "1rem" }}
              />
              <div>
                <CardHeader>
                  <CardTitle
                    className={`text-2xl font-bold ${
                      isDark ? "text-light" : "text-gray-800"
                    }`}
                  >
                    Gaurav Parab
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`text-lg ${
                      isDark ? "text-light" : "text-gray-600"
                    }`}
                  >
                    Hi! I&apos;m Gaurav, a junior studying Computer Science at
                    Penn State. I&apos;m always interested in picking up new
                    projects or exploring new technologies. Feel free to reach
                    out!
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
