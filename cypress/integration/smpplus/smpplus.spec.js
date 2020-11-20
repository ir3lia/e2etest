describe('smp+登录测试', function () {
    it('Does not do much!', function () {
        cy.visit("http://172.17.8.202:8088")

        cy.get('input[formcontrolname=userName]') .type("admin")

        cy.get('input[formcontrolname=password]') .type("Shyfzx@163")
    
        cy.wait(100)

        cy.get('button[nztype=primary]').click()

        cy.url().should('include','compliance')

    })
})