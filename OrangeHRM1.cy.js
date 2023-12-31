describe("Orange HRM", ()=>{
    it('TestCase: 1 To Evaluate Login Screen', () => { 
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('TestCase: 2 To Verify LoginScreen Title & Logo',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title('.orangehrm-login-branding').should('exist','Orange')
    .and('eq',"OrangeHRM")
    cy.get('.orangehrm-login-branding > img').should('be.visible')
    .and('exist')
    })
    it('TestCase: 3 To Verify Account Validation',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.wait(5000)  
    cy.get("input[name='username']").click().type("Admin")
    cy.get('input[placeholder="Username"]').should('have.value','Admin')
    cy.get('input[placeholder="Password"]').click().type('admin123')
    cy.get('button[type="submit"]').click()
    })
    it("TestCase: 4 To Verify System Users",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
    cy.get('input[placeholder="Username"]').click().type("Admin")
    cy.get('input[placeholder="Username"]').should('have.value','Admin')
    cy.get('input[placeholder="Password"]').click().type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-body-nav-tab.--parent.--visited').click()
    cy.wait(5000)             
    cy.get('.oxd-topbar-body-nav-tab-link').click() 
    cy.get(':nth-child(2) > .oxd-input') 
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click() 
    cy.get('.oxd-autocomplete-text-input > input').click()         
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click() 
    })
    it("TestCase: 5 To Verify Create new Vacancy Elements",()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
    cy.get('input[placeholder="Username"]').click().type("Admin")
    cy.get('input[placeholder="Username"]').should('have.value','Admin')
    cy.get('input[placeholder="Password"]').click().type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('li:nth-child(5)').click()
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
    cy.eq("li[class='oxd-topbar-body-nav-tab'] a[class='oxd-topbar-body-nav-tab-item']")
    })
    it("TestCase: 6 Add New Vacancy",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
    cy.get('input[placeholder="Username"]').click().type("Admin")
    cy.get('input[placeholder="Username"]').should('have.value','Admin')
    cy.get('input[placeholder="Password"]').click().type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('li:nth-child(5)').click()
    cy.get('.oxd-text oxd-text--h5 oxd-table-filter-title').contains('Candidates')
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
    cy.contains("Search").should("be.visible").then(()=>{
    cy.get(".div[class='oxd-table-filter-area'] div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) i:nth-child(1)").first().should("be.visible").click({force:true})
    cy.get(":nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon").select('Account Assistant')   
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon").select('Associate IT Manager') 
    cy.get(".oxd-icon bi-caret-down-fill oxd-select-text--arrow").select('Sam Collings') 
    cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon").select('Shortlisted') 
    cy.get(".input[placeholder='Type for hints...']")
    })   
    it("TestCase: 7 Reset Password ",()=> {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/updatePassword')
    cy.contains(".oxd-text oxd-text--h6 orangehrm-main-title")
    cy.contains(".oxd-text oxd-text--p orangehrm-user-name") 
    cy.get(".oxd-userdropdown-name").click()
    cy.get(".oxd-userdropdown-link").click()
    cy.contains("oxd-label")
    cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("admin123")
    cy.get("input[type='password']").click().type("adminadmin1")
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("adminadmin1")
    })
})
})
