class MenuPage {
    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            adminButton: "[href='/web/index.php/admin/viewAdminModule']"
        
        }
        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }

    accessRecruitment() {
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    accessTime() {
        cy.get(this.selectorsList().timeButton).click()
    }

    accessLeave() {
        cy.get(this.selectorsList().leaveButton).click()
    }

    accessPim() {
        cy.get(this.selectorsList().pimButton).click()
    }

    accessAdmin() {
        cy.get(this.selectorsList().adminButton).click()
    }
}

export default MenuPage