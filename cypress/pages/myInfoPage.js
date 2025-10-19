class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericComboBox: ".oxd-select-text-input"
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().middleNameField).clear().type(middleName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeDetails(employeeId, otherId, driversLicense, expireDate ) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
    cy.get(this.selectorsList().genericField).eq(6).clear().type(expireDate)
    cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }

    fillStatus() {
    cy.get(this.selectorsList().genericComboBox).eq(0).click()
    cy.get("[role='option']").eq(26).click()
    cy.get(this.selectorsList().genericComboBox).eq(1).click()
    cy.get("[role='option']").eq(3).click()
    }
}


export default MyInfoPage