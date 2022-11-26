let num = Math.floor(Math.random() * 10 + 1)
let input = []
let tentativas = 0
let input02 = 0

document.getElementById('tent').innerHTML = tentativas

function input01 () {
    input02 = Number(document.getElementById('inum').value)

    
        if(num == input02) {
            tentativas += 1
            document.getElementById('tent').innerHTML = tentativas
            document.getElementById('RESULT').style.display='flex'
            document.getElementById('RESULT').style.background='green'
            document.getElementById('RESULT').innerHTML = 'PARABÉNS, VOCÊ ACERTOU!!!'
            input02 = Number(document.getElementById('inum').value)
            input.push(input02)
            document.getElementById('palpit').innerHTML = input
            document.getElementById('tent').innerHTML = tentativas
            document.getElementById('inum').style.display='none'
            tentativas += 1
            const audio02 = document.getElementById('ganhou')
            audio02.play()
        }
        
        if(tentativas <= 3 && num != input02) {
            input02 = Number(document.getElementById('inum').value)
            input.push(input02)
            document.getElementById('palpit').innerHTML = input
            document.getElementById('inum').value = ""
            tentativas += 1
            document.getElementById('tent').innerHTML = tentativas
        }
            

        if(tentativas == 3 && num != input02) {
            document.getElementById('inum').value = ""
            document.getElementById('tent').innerHTML = tentativas
            document.getElementById('RESULT').style.display='flex'
            document.getElementById('resultado').innerHTML = 'VOCÊ PERDEU A RESPOSTA ERA  '+num
            const audio = document.getElementById('perdeu')
            audio.play()
            
        }
        
    }

    function botao () {
        location.reload()
    }
   
    


console.log(num)