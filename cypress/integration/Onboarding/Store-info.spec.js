describe('StoreInfo-Validations',() =>{
    beforeEach(()=>{
        cy.visit('https://onboarding-rps.hs-staging.com/en/register')
        cy.xpath('//*[@id="companyFormValidate"]/div/div[1]/label').click()
        cy.xpath('//*[@id="company_name_ar"]').type('تست')
        cy.get('#companyFormValidate > .form_container > :nth-child(2)').click()
        cy.xpath('//*[@id="company_name_en"]').type('TestName')
        cy.xpath('//*[@id="company_field"]/div[2]/div/div[1]/label').click()
      cy.xpath('//*[@id="cr_num"]').click()
      .type('1234567890')
      cy.xpath('//*[@id="nextBtn"]').click()
    })
    it('Select Store Type',()=>{
        cy.xpath('//*[@id="restaurants_0"]').click()
        cy.xpath('//*[@id="store_form_0"]/div[1]/label').should('contain','Restaurant Name in Arabic')
    })
    it('Add Another store link',()=>{
        cy.xpath('//*[@id="restaurants_0"]').click()
        cy.xpath('//*[@id="add_button"]').click()
        cy.xpath('//*[@id="form_1"]/div').should('be.visible')
    })
    it('Restaurant Name should accept only AR letters',()=>{
        cy.xpath('//*[@id="restaurants_0"]').click()
        cy.xpath('//*[@id="name_ar_0"]').click().type('Test')
        cy.xpath('//*[@id="name_en_0"]').click()
        cy.xpath('//*[@id="name_ar_0-error"]').should('contain','Please enter the name in Arabic letters').and('have.css','color','rgb(255, 95, 79)')
    })
    it('Restaurant Name should accept only EN letters',()=>{
        cy.xpath('//*[@id="restaurants_0"]').click()
        cy.xpath('//*[@id="name_en_0"]').click().type('تست')
        cy.xpath('//*[@id="name_ar_0"]').click()
        cy.xpath('//*[@id="name_en_0-error"]').should('contain','Please enter the name in English letters').and('have.css','color','rgb(255, 95, 79)')
    })
    it('Fields are required',()=>{
        cy.xpath('//*[@id="restaurants_0"]').click()
        cy.xpath('//*[@id="nextBtn"]').click()
        cy.xpath('//*[@id="region_0-error"]').should('be.visible').and('contain','Please choose one region').and('have.css','color','rgb(255, 95, 79)')
    })
    it('select cuisine',()=>{
        cy.xpath('//*[@id="restaurants_0"]').click()
        cy.xpath('//*[@id="cuisine_field_0"]').click()
        cy.xpath('//*[@id="types_0"]/button[1]').click()
        cy.xpath('//*[@id="cuisine_apply_btn_0"]').click()
        cy.xpath('//*[@id="cuisine_field_0"]/span').should('contain','Turkish')
    })

})