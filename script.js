// Smooth scrolling mejorado para la nueva altura
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            const offsetTop = target.offsetTop - 80 // Ajuste para navbar
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            })
        }
    })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 100) {
        navbar.style.background = "rgba(10, 10, 10, 0.98)"
    } else {
        navbar.style.background = "rgba(10, 10, 10, 0.95)"
    }
})

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running"
            entry.target.classList.add("animate")
        }
    })
}, observerOptions)

// Observe all project cards
document.querySelectorAll(".project-card").forEach((card) => {
    observer.observe(card)
})

// CTA Button actions
document.querySelector(".cta-button.primary").addEventListener("click", () => {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth",
    })
})

document.querySelector(".cta-button.secondary").addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth",
    })
})

// Project card hover effects
document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)"
    })
})

// Global floating particles animation
function createGlobalFloatingParticles() {
    const particlesContainer = document.createElement("div")
    particlesContainer.className = "global-particles"
    document.body.appendChild(particlesContainer)

    const particleCount = 30

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div")
        particle.className = "floating-particle"

        const size = Math.random() * 4 + 2
        const opacity = Math.random() * 0.5 + 0.1
        const duration = Math.random() * 15 + 10
        const delay = Math.random() * 10

        particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: rgba(0, 255, 136, ${opacity});
      left: ${Math.random() * 100}%;
      top: 100%;
      animation: floatParticleGlobal ${duration}s linear infinite;
      animation-delay: ${delay}s;
    `

        particlesContainer.appendChild(particle)
    }
}

// Global floating large shapes animation
// Actualizar la función createGlobalFloatingShapes para usar diferentes animaciones:

function createGlobalFloatingShapes() {
    const shapesContainer = document.createElement("div")
    shapesContainer.className = "global-shapes"
    document.body.appendChild(shapesContainer)

    const shapeCount = 10 // Aumentar a 10 formas

    const animations = ["floatGlobalShape", "floatGlobalShape2", "floatGlobalShape3"]

    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement("div")
        shape.className = "global-shape"

        const size = Math.random() * 180 + 60 // Entre 60px y 240px
        const opacity = Math.random() * 0.08 + 0.02 // Entre 0.02 y 0.1
        const duration = Math.random() * 10 + 8 // Entre 8s y 18s
        const delay = Math.random() * 20 // Delay hasta 20s
        const animationType = animations[Math.floor(Math.random() * animations.length)]

        // Crear gradientes más variados
        const gradientType = Math.random()
        let gradient
        if (gradientType < 0.33) {
            gradient = `radial-gradient(circle, rgba(0, 255, 136, ${opacity}), rgba(0, 204, 106, ${opacity * 0.5}))`
        } else if (gradientType < 0.66) {
            gradient = `linear-gradient(135deg, rgba(0, 255, 136, ${opacity}), rgba(0, 204, 106, ${opacity * 0.8}))`
        } else {
            gradient = `conic-gradient(from 0deg, rgba(0, 255, 136, ${opacity}), rgba(0, 204, 106, ${opacity * 0.6}), rgba(0, 255, 136, ${opacity}))`
        }

        shape.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${gradient};
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: ${animationType} ${duration}s ease-in-out infinite;
      animation-delay: ${delay}s;
      border-radius: ${Math.random() > 0.7 ? "20%" : "50%"};
    `

        shapesContainer.appendChild(shape)
    }
}

// Función para manejar las imágenes de proyectos
function setupProjectImages() {
    // Agregar clase para contenido con imagen
    const browserContent = document.querySelector('.project-card[data-project="perroteygatote"] .browser-content')
    if (browserContent) {
        browserContent.classList.add("has-image")
    }

    // Agregar overlay de información
    const perroteygatoteCard = document.querySelector('.project-card[data-project="perroteygatote"] .browser-content')
    if (perroteygatoteCard) {
        const overlay = document.createElement("div")
        overlay.className = "project-overlay"
        overlay.innerHTML = `
            <h4>Perroteygatote.com</h4>
            <div class="tech-tags">
                <span class="tech-tag-small">HTML5</span>
                <span class="tech-tag-small">CSS3</span>
                <span class="tech-tag-small">JavaScript</span>
                <span class="tech-tag-small">Responsive</span>
            </div>
        `
        perroteygatoteCard.appendChild(overlay)
    }
}

// Llamar la función después de que se cargue la página
window.addEventListener("load", () => {
    setupProjectImages()
})

// Actualizar el CSS para las partículas globales
const globalParticleStyle = document.createElement("style")
globalParticleStyle.textContent = `
  @keyframes floatParticleGlobal {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    95% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
      opacity: 0;
    }
  }
  
  .floating-particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }
`
document.head.appendChild(globalParticleStyle)

// Inicializar partículas globales
createGlobalFloatingParticles()

// Llamar a la función después de createGlobalFloatingParticles():
createGlobalFloatingShapes()

// Regenerar partículas cada cierto tiempo para mantener el efecto
// Actualizar la función de regeneración de partículas pequeñas para que sea más frecuente:

// Cambiar el intervalo de regeneración de partículas pequeñas de 30000 a 25000:
setInterval(() => {
        const existingContainer = document.querySelector(".global-particles")
        if (existingContainer) {
            existingContainer.remove()
        }
        createGlobalFloatingParticles()
    }, 25000) // Regenerar cada 25 segundos

// Regenerar formas grandes cada cierto tiempo
setInterval(() => {
        const existingShapesContainer = document.querySelector(".global-shapes")
        if (existingShapesContainer) {
            existingShapesContainer.remove()
        }
        createGlobalFloatingShapes()
    }, 45000) // Regenerar cada 45 segundos

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0
    element.innerHTML = ""

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i)
            i++
            setTimeout(type, speed)
        }
    }

    type()
}

// Enhanced scroll indicator
const scrollIndicator = document.querySelector(".scroll-indicator")
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5
    scrollIndicator.style.transform = `translateX(-50%) translateY(${rate}px)`

    if (scrolled > 200) {
        scrollIndicator.style.opacity = "0"
    } else {
        scrollIndicator.style.opacity = "1"
    }
})

// Project card click handlers
document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
        let title = "";
        const h3 = card.querySelector("h3");
        if (h3 && h3.textContent) {
            title = h3.textContent.trim();
        }

        switch (title) {
            case "Perroteygatote.com":
                window.open("https://www.perroteygatote.com/", "_blank");
                break;
            case "buff-headCOL.com":
                window.open("https://gorras-sigma.vercel.app/", "_blank");
                break;
            case "CelularTechi-col":
                window.open("https://celus-col.vercel.app/", "_blank");
                break;
            case "Ferremacro Col":
                window.open("https://ferre-col.vercel.app/", "_blank");
                break;
            case "panambarberMAN":
                window.open("https://barberia-sable.vercel.app/", "_blank");
                break;
            default:
                alert("Este espacio está reservado para tu próximo proyecto. ¡Pronto estará disponible!");
        }
    });
});






// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget
    const circle = document.createElement("span")
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`
    circle.classList.add("ripple")

    const ripple = button.getElementsByClassName("ripple")[0]
    if (ripple) {
        ripple.remove()
    }

    button.appendChild(circle)
}

// Add ripple CSS
const rippleStyle = document.createElement("style")
rippleStyle.textContent = `
    .cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(rippleStyle)

// Apply ripple effect to all buttons
document.querySelectorAll(".cta-button").forEach((button) => {
    button.addEventListener("click", createRipple)
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallax = document.querySelector(".hero-background")
    const speed = scrolled * 0.5

    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`
    }
})

// Loading animation
window.addEventListener("load", () => {
    document.body.classList.add("loaded")

    // Animate elements on load
    setTimeout(() => {
        document.querySelectorAll(".project-card").forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = "1"
                card.style.transform = "translateY(0)"
            }, index * 200)
        })
    }, 500)
})



console.log("🚀 DevStudio Website Loaded Successfully!")
console.log("💚 Desarrollado con amor y mucho código verde")