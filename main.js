// this creates the type animation for the website's title text //

  // this registers the gsap plugin //
  
    gsap.registerPlugin(TextPlugin);

    // establishes the animation and applies it to the id title //

    const Type = document.getElementById("title");

    // this tells the animation to run for 4 seconds, and spell out the title //

    gsap.to(Type, {

      duration: 4,
      text: "KANDINSKY.NET",

    });

// this swtches the original home text to alternative home text //

  const changeText = document.querySelector("#hometext");

  changeText.addEventListener("click", function() {
    changeText.textContent = "Wassily Kandinsky was a pioneering Russian painter and art theorist, widely regarded as one of the foremost figures in abstract art. Born on December 16, 1866, in Moscow, Kandinsky's early career was rooted in law and economics; however, his passion for art ultimately led him to pursue a more creative path. Influenced by the vibrant colorsand spiritual themes of Russian folklore, as well as the burgeoning avant-garde movements in Europe, Kandinsky developed a unique style that emphasized the emotional and spiritual resonance of color and form. His groundbreaking work laid the foundation for abstract expressionism, making him a pivotal figure in the evolution of modern art. Through his influential writings and innovative paintings, Kandinsky continues to inspire artists and art lovers alike, inviting them to explore thedeeper connections between art and human experience. Today, not many are familiar with the works of Kandinsky, this website aims to aid that.";
  });