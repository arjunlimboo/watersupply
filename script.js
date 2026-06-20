document.addEventListener('DOMContentLoaded', () => {
    setupDateValidationLimits();
    setupInteractiveFormControls();
    setupRegionalRouteChecker();
    setupScrollAnimations();
});

/**
 * 1. Date Field Optimization Restraints
 * Sets safe min boundaries for calendar selections avoiding past day booking
 */
function setupDateValidationLimits() {
    const targetDateInput = document.getElementById('targetDeliveryDate');
    if (targetDateInput) {
        const currentDate = new Date().toISOString().split('T')[0];
        targetDateInput.min = currentDate;
        targetDateInput.value = currentDate;
    }
}

/**
 * 2. Form Booking Execution Engine
 */
function setupInteractiveFormControls() {
    const btnSchedule = document.getElementById('btnScheduleAction');
    const btnOrder = document.getElementById('btnOrderNowAction');
    const dateInput = document.getElementById('targetDeliveryDate');
    const slotInput = document.getElementById('targetDeliverySlot');

    if (btnSchedule) {
        btnSchedule.addEventListener('click', () => {
            const timeLabel = slotInput.options[slotInput.selectedIndex].text;
            triggerToastNotification(`Case scheduling logged for ${dateInput.value} during ${timeLabel}.`);
        });
    }

    if (btnOrder) {
        btnOrder.addEventListener('click', () => {
            triggerToastNotification("Instant delivery priority order initialized. Processing routing queue...");
        });
    }
}

/**
 * 3. E-commerce Cart Operations Trigger
 */
function triggerCartAction(productLineName) {
    triggerToastNotification(`Success: "${productLineName}" updated in your production checkout context.`);
}

/**
 * 4. Regional Logistical Area Verification Handler
 */
function setupRegionalRouteChecker() {
    const verifyBtn = document.getElementById('btnCheckAreaLocation');
    const areaInput = document.getElementById('routeAreaInput');
    const outputDisplay = document.getElementById('routeValidationDisplay');

    if (verifyBtn && areaInput && outputDisplay) {
        verifyBtn.addEventListener('click', () => {
            const query = areaInput.value.trim();

            if (!query) {
                outputDisplay.style.display = 'block';
                outputDisplay.style.color = '#ef4444';
                outputDisplay.innerHTML = '<i class="fas fa-times-circle"></i> Please enter an area location context or zip code.';
                return;
            }

            // Simulating truck route availability pattern matches
            outputDisplay.style.display = 'block';
            outputDisplay.style.color = '#2e7d32';
            outputDisplay.innerHTML = `<i class="fas fa-check-circle"></i> Active Routes Found! 1.5L batch delivery lines serve <strong>"${query}"</strong> daily.`;
        });
    }
}

/**
 * 5. Animated Counter Statistics Simulation
 * Increments KPI variables cleanly when section populates
 */
function setupScrollAnimations() {
    const metrics = document.querySelectorAll('.metric-num');
    
    metrics.forEach(metric => {
        const targetValue = parseInt(metric.getAttribute('data-target'), 10);
        let currentStart = 0;
        const durationSteps = Math.ceil(targetValue / 50);
        
        const countTimer = setInterval(() => {
            currentStart += durationSteps;
            if (currentStart >= targetValue) {
                metric.innerText = targetValue.toLocaleString() + '+';
                clearInterval(countTimer);
            } else {
                metric.innerText = currentStart.toLocaleString() + '+';
            }
        }, 30);
    });
}

/**
 * 6. Central Toast notification layer system
 */
function triggerToastNotification(alertMessageText) {
    const toastBox = document.getElementById('toastEngineAlert');
    if (!toastBox) return;

    toastBox.innerText = alertMessageText;
    toastBox.classList.add('reveal');

    setTimeout(() => {
        toastBox.classList.remove('reveal');
    }, 4000);
}
