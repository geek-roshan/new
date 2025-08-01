// Import Three.js and GSAP
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        gsap.to(preloader, {
            duration: 1,
            opacity: 0,
            ease: 'power2.out',
            delay: 1,
            onComplete: () => {
                preloader.style.display = 'none';
            }
        });
    }

    // Animate hero section on load
    gsap.from('#about-hero-title', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5
    });

    gsap.from('#about-hero-desc', {
        duration: 1.5,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.8
    });

    // Animate about sections
    gsap.from('#about-blog-context .sec-context-inner', {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#about-blog',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('#about-services-context .sec-context-inner', {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#about-services',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Animate featured section
    gsap.from('#featured-title .split-line-inner', {
        duration: 1.2,
        y: '100%',
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#featured-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('#featured-desc', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3,
        scrollTrigger: {
            trigger: '#featured-desc',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Animate featured items
    const featuredItems = document.querySelectorAll('.featured-item');
    featuredItems.forEach((item, index) => {
        gsap.from(item, {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: 'power3.out',
            delay: index * 0.2,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate contact section
    gsap.from('#contact-context .sec-context-inner', {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Featured item hover animations
    featuredItems.forEach(item => {
        const link = item.querySelector('.featured-item-link');
        const image = item.querySelector('.featured-item-image');
        const context = item.querySelector('.featured-item-context');

        item.addEventListener('mouseenter', () => {
            gsap.to(image, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
            gsap.to(context, {
                duration: 0.3,
                y: -10,
                ease: 'power2.out'
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(image, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
            gsap.to(context, {
                duration: 0.3,
                y: 0,
                ease: 'power2.out'
            });
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('#header-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: targetSection, offsetY: 80 },
                    ease: 'power3.inOut'
                });
            }
        });
    });

    // Update scrollbar indicator
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        const indicator = document.getElementById('main-scrollbar-indicator');
        if (indicator) {
            indicator.style.height = `${scrollPercent}%`;
        }
    });
});

// Three.js Background Animation
class ThreeBackground {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ 
            alpha: true,
            antialias: true 
        });
        this.particles = [];
        
        this.init();
    }

    init() {
        // Create canvas and append to body
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        document.body.appendChild(this.renderer.domElement);
        this.renderer.domElement.style.position = 'fixed';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.left = '0';
        this.renderer.domElement.style.zIndex = '-1';
        this.renderer.domElement.style.pointerEvents = 'none';

        // Create particles
        const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
        const particleMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xffffff, 
            transparent: true, 
            opacity: 0.4 
        });

        for (let i = 0; i < 150; i++) {
            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            particle.position.set(
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 30
            );
            particle.velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 0.01,
                (Math.random() - 0.5) * 0.01,
                (Math.random() - 0.5) * 0.01
            );
            this.particles.push(particle);
            this.scene.add(particle);
        }

        this.camera.position.z = 10;

        // Animation loop
        this.animate();

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Update particles
        this.particles.forEach(particle => {
            particle.position.add(particle.velocity);
            
            // Wrap around boundaries
            if (particle.position.x > 15) particle.position.x = -15;
            if (particle.position.x < -15) particle.position.x = 15;
            if (particle.position.y > 15) particle.position.y = -15;
            if (particle.position.y < -15) particle.position.y = 15;
            if (particle.position.z > 15) particle.position.z = -15;
            if (particle.position.z < -15) particle.position.z = 15;
        });

        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// Initialize Three.js background when page loads
window.addEventListener('load', () => {
    new ThreeBackground();
});

// Mouse tracking
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const cursorFollow = document.getElementById('cursor-follow');
    if (cursorFollow) {
        gsap.to(cursorFollow, {
            duration: 0.1,
            x: mouseX + 10,
            y: mouseY + 10,
            ease: 'power2.out'
        });
    }
});

// Add loading animation
window.addEventListener('load', () => {
    gsap.to('body', {
        duration: 0.5,
        opacity: 1,
        ease: 'power2.out'
    });
});

// Initialize body opacity
document.body.style.opacity = '0'; 