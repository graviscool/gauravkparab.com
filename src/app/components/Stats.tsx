export default function Stats() {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <picture>
        <source
          srcSet="https://github-readme-stats-orpin-seven-78.vercel.app/api/top-langs?username=graviscool&theme=radical&layout=compact&card_width=300px&langs_count=7&disable_animations=true"
          media="(max-width: 430px)"
        />
        <source
          srcSet="https://github-readme-stats-orpin-seven-78.vercel.app/api/top-langs?username=graviscool&theme=radical&layout=compact&card_width=400px&langs_count=7&disable_animations=true"
          media="(max-width: 550px)"
        />
        <source
          srcSet="https://github-readme-stats-orpin-seven-78.vercel.app/api/top-langs?username=graviscool&theme=radical&layout=compact&card_width=500px&langs_count=7&disable_animations=true"
          media="(max-width: 800px)"
        />
        <source
          srcSet="https://github-readme-stats-orpin-seven-78.vercel.app/api/top-langs?username=graviscool&theme=radical&layout=compact&card_width=700px&langs_count=7"
          media="(max-width: 9999px)"
        />

        <img
          height={200}
          src="https://github-readme-stats-orpin-seven-78.vercel.app/api/top-langs?username=graviscool&theme=radical&layout=compact&langs_count=7"
          alt="Top Languages Used"
        />
      </picture>
      <picture>
        <source
          srcSet="https://github-readme-stats-orpin-seven-78.vercel.app/api/wakatime?username=graviscool&theme=radical&layout=compact&card_width=300px&langs_count=7&disable_animations=true"
          media="(max-width: 430px)"
        />
        <source
          srcSet="https://github-readme-stats-orpin-seven-78.vercel.app/api/wakatime?username=graviscool&theme=radical&layout=compact&card_width=400px&langs_count=7&disable_animations=true"
          media="(max-width: 550px)"
        />
        <source
          srcSet="https://github-readme-stats-orpin-seven-78.vercel.app/api/wakatime?username=graviscool&theme=radical&layout=compact&card_width=500px&langs_count=7&disable_animations=true"
          media="(max-width: 800px)"
        />
        <source
          srcSet="https://github-readme-stats-orpin-seven-78.vercel.app/api/wakatime?username=graviscool&theme=radical&layout=compact&card_width=700px&langs_count=7"
          media="(max-width: 9999px)"
        />

        <img
          height={200}
          src="https://github-readme-stats-orpin-seven-78.vercel.app/api/wakatime?username=graviscool&theme=radical&layout=compact&langs_count=7"
          alt="Top Languages Used"
        />
      </picture>
    </div>
  );
}
