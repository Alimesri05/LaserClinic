// ==================== Main JavaScript ====================

document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
    
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }
    
    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Smooth Scroll for anchor links (only on index.html)
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#' || targetId === '') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // ==================== FAQ ACCORDION ====================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    otherAnswer.classList.remove('show');
                    otherQuestion.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            answer.classList.toggle('show');
            question.classList.toggle('active');
        });
    });
    
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.service-card, .about-grid, .gallery-item, .trust-item, .pricing-card, .faq-item, .contact-card');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
        revealObserver.observe(el);
    });
    
    console.log('Precision Laser Clinic - Website Loaded Successfully!');
});

// ==================== CHATBOT LOGIC ====================
const chatbotButton = document.getElementById('chatbotButton');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotMessages = document.getElementById('chatbotMessages');

// Open/Close chatbot
if (chatbotButton) {
    chatbotButton.addEventListener('click', () => {
        chatbotWindow.classList.toggle('hidden');
        if (!chatbotWindow.classList.contains('hidden')) {
            chatbotInput.focus();
        }
    });
}

if (chatbotClose) {
    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.add('hidden');
    });
}

// Send message function
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="typing-indicator">
            <span></span><span></span><span></span>
        </div>
    `;
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function hideTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

// پاسخ‌های هوشمند
function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase().trim();
    
    // Laser Hair Removal
    if (msg.includes('hair removal') || msg.includes('لیزر مو') || (msg.includes('laser') && msg.includes('hair'))) {
        return "Laser hair removal uses concentrated light to remove unwanted hair. Most areas need 6-8 sessions spaced 4-6 weeks apart. Prices start from $75 for upper lip. Would you like a free consultation?";
    }
    
    // Tattoo Removal
    if (msg.includes('tattoo') || msg.includes('تاتو') || msg.includes('ink')) {
        return "Our picosecond laser removes tattoos in 4-10 sessions depending on ink color and size. Prices start from $100 per session. Black ink responds best. Want to book a patch test?";
    }
    
    // Skin Rejuvenation
    if (msg.includes('skin') || msg.includes('rejuvenation') || msg.includes('جوانسازی') || msg.includes('wrinkle') || msg.includes('scar')) {
        return "Skin rejuvenation reduces fine lines, scars, and sun damage. 3-4 sessions recommended, spaced 3-4 weeks apart. Full face starts at $250/session. Results improve over 3-6 months!";
    }
    
    // Pricing
    if (msg.includes('price') || msg.includes('cost') || msg.includes('هزینه') || msg.includes('how much')) {
        return "Our prices vary by treatment area. Laser hair removal: $75-350/session. Tattoo removal: $100-300/session. Skin rejuvenation: $150-450/session. Package discounts available!";
    }
    
    // Sessions
    if (msg.includes('session') || msg.includes('جلسه') || msg.includes('how many')) {
        return "Most treatments require 6-8 sessions for optimal results. Sessions are spaced 4-8 weeks apart depending on the treatment. A free consultation will give you a personalized plan!";
    }
    
    // Pain
    if (msg.includes('pain') || msg.includes('درد') || msg.includes('hurt') || msg.includes('uncomfortable')) {
        return "Most patients describe the sensation as a rubber band snap. Our devices have cooling tips that minimize discomfort. Topical numbing cream is available if needed!";
    }
    
    // Booking
    if (msg.includes('book') || msg.includes('appointment') || msg.includes('رزرو') || msg.includes('نوبت')) {
        return "You can book a free consultation by clicking the 'Contact Us' button in the menu, calling us at (604) XXX-XXXX, or visiting our clinic. We're open Mon-Fri 10am-7pm, Sat 10am-4pm!";
    }
    
    // Contact
    if (msg.includes('contact') || msg.includes('تماس') || msg.includes('phone') || msg.includes('email') || msg.includes('address')) {
        return "📍 123 Main Street, Suite 200, Vancouver BC<br>📞 (604) XXX-XXXX<br>✉️ hello@precisionlaserclinic.ca<br>🕒 Mon-Fri 10am-7pm, Sat 10am-4pm";
    }
    
    // Free consultation
    if (msg.includes('free') || msg.includes('رایگان') || msg.includes('consultation')) {
        return "Yes! We offer FREE initial consultations. You can meet Dr. Williams, discuss your goals, and get a personalized treatment plan with no obligation. Click 'Contact Us' to schedule yours!";
    }
    
    // Hello / Hi
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('سلام')) {
        return "Hello! 👋 Welcome to Precision Laser Clinic. How can I help you today? I can answer questions about laser hair removal, tattoo removal, skin rejuvenation, pricing, and booking.";
    }
    
    // Default response
    return "Thank you for your message! I can help you with:<br>• Laser hair removal<br>• Tattoo removal<br>• Skin rejuvenation<br>• Pricing & sessions<br>• Booking appointments<br><br>Could you please rephrase your question? Or call us at (604) XXX-XXXX for immediate assistance.";
}

// Handle send message
async function sendMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;
    
    addMessage(message, true);
    chatbotInput.value = '';
    
    showTyping();
    
    setTimeout(() => {
        hideTyping();
        const response = getBotResponse(message);
        addMessage(response, false);
    }, 800);
}

// Event listeners
if (chatbotSend) {
    chatbotSend.addEventListener('click', sendMessage);
}

if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}