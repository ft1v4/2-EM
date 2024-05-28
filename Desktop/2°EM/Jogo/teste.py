import random
class obstaculo():
    
     def __init__(self,tamanho,nome,simbolo,quantidade, prePosition = []) -> None:
         self.tamanho = tamanho
         self.nome = nome
         self.simbolo = simbolo
         self.quantidade = quantidade
         self.posicoes = prePosition
         

     def adicionaCoordenada(self,coordenada):  
         self.posicoes.append(coordenada)

class player():
     barcos =[]
     def __init__(self,nome,barcos) -> None:
         self.nome = nome
         self.barcos = barcos

def colocarObstaculo(matriz,linha,col,tamanho,nome):
     for i in range(tamanho):
         matriz[linha][col + i] = nome   

def mostra(matriz):
     st = ''
     for x in range(10):
         for y in range(10):
             print(matriz[x][y], end=' ')
         print(st)

def tiroCpu():
    tiroCPUL = random.randint(0,9)
    tiroCPUC =random.randint(0,9)
    if matriz[tiroCPUL][tiroCPUC] == 'J':
         matriz[tiroCPUL][tiroCPUC] = 'X'
    if matriz[tiroCPUL][tiroCPUC] == 'B':
         matriz[tiroCPUL][tiroCPUC] = 'X'
    if matriz[tiroCPUL][tiroCPUC] == 'C':
         matriz[tiroCPUL][tiroCPUC] = 'X'
    if matriz[tiroCPUL][tiroCPUC] == 'S':
         matriz[tiroCPUL][tiroCPUC] = 'X'
    if matriz[tiroCPUL][tiroCPUC] == 'P':
         matriz[tiroCPUL][tiroCPUC] = 'X'
    else:
        matriz[tiroCPUL][tiroCPUC] = 'A'
    
    print(mostra(matriz))

def pergunta():
         print(jogador1.nome + ' digite onde vai ficar o '+barco.nome+' '+str(i) +' (de 0 a 9)') 
        
         coordenadaOk = False
         while coordenadaOk == False:

             coordenadaOk = True
    

             str_linha = input('Digite a linha:')
             if str_linha  in ['0','1','2','3','4','5','6','7','8','9'] :
                 linha = int(str_linha)
             else:
                  linha = -1
        
        
             str_col =input('Digite a coluna:')
             if str_col  in ['0','1','2','3','4','5','6','7','8','9'] :
                 coluna = int(str_col)
             else:
                 coluna = -1

            

             if coluna < 0 or  coluna > 9:
                 print('ERRO')
                 coordenadaOk = False

                 if linha < 0 or linha > 9:
                     print('ERRO 2')
                     coordenadaOk = False
        
            
                    
             if linha > 9 or linha  < 0:
                 print('Não existe essa LINHA!!!')
                 coordenadaOk = False
                
                 if coluna  > 9 or coluna  < 0:
                     print('Nao existe essa COLUNA!!!')
                     coordenadaOk = False
                
             if (barco.tamanho -1)+ coluna > 9  :
                 print('Digite o valor novamente ')
                 coordenadaOk = False
        

         return [linha,coluna]
        
def colocarTiro(matriz,tiroL,tiroC,tamanho,nome):
     tamanho = 0
     nome =  'X'
     for i in range(tamanho):
         matriz[tiroL][tiroC] = nome  

def perguntaTiro():
         print(jogador1.nome + ' digite onde vai atirar  (de 0 a 9)') 
        
         coordenadaOk = False
         while coordenadaOk == False:

             coordenadaOk = True
    

             tiroLinha = input('Digite a linha:')
             if tiroLinha  in ['0','1','2','3','4','5','6','7','8','9'] :
                 tiroL = int(tiroLinha)
             else:
                  tiroL = -1
        
        
             tiroColuna =input('Digite a coluna:')
             if tiroColuna  in ['0','1','2','3','4','5','6','7','8','9'] :
                 tiroC = int(tiroColuna)
                

             else:
                 tiroC = -1
                 
                        
             if tiroC < 0 or  tiroC > 9:
                 print('ERRO')
                 coordenadaOk = False

                 if tiroL < 0 or tiroL > 9:
                     print('ERRO 2')
                     coordenadaOk = False
        
            
                    
             if tiroL > 9 or tiroL  < 0:
                 print('Não existe essa LINHA!!!')
                 coordenadaOk = False
                
                 if tiroC  > 9 or tiroC < 0:
                     print('Nao existe essa COLUNA!!!')
                     coordenadaOk = False

        

         return [tiroL,tiroC]
   
def tiroPlayer():
    coordenada = perguntaTiro()
    print(coordenada)

    if matrizCPU[coordenada[0]][coordenada[1]] == 'S' :
          matrizCPU[coordenada[0]][coordenada[1]] = 'X'
          
    else:
          matrizCPU[coordenada[0]][coordenada[1]] = 'A'
         

    print(mostra(matrizCPU))


#INICIO DO PROGAMA
carac = '*'
matriz = [
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac], 
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac], 
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac],
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac],
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac],
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac],    
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac], 
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac], 
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac], 
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac], ]


print(mostra(matriz))


matrizCPU = [
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac], 
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac], 
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac],
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac],
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac],
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac],    
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac], 
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac], 
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac], 
     [carac,carac,carac,carac,carac,carac,carac,carac,carac,carac], ]


 
JetSky = obstaculo(1,'Jet Sky', 'J',3)
Bote = obstaculo(2,'Bote', 'B',2)
Canoa = obstaculo(3,'Canoa','C',3)
Submarino = obstaculo(4,'Submarino', 'S',2)
Titanic = obstaculo (5,'Titanic', 'P',1)
 

jogador1 = player('Fiote',[JetSky,Bote,Canoa,Submarino,Titanic]) 
cpu = player('CPU',[JetSky,Bote,Canoa,Submarino,Titanic])
        
for barco in jogador1.barcos:
     for i in range(barco.quantidade):

         coordenada = pergunta()
            

         colocarObstaculo(matriz,coordenada[0],coordenada[1],barco.tamanho,barco.simbolo)
         barco.adicionaCoordenada(str(str(coordenada[0])+':'+str(coordenada[1])))
         mostra(matriz)
         print('Posiçoes ' + barco.nome)
         print(barco.posicoes)


 



linhaCPU = random.randint(0,7)
colunaCPU =random.randint(0,7)

submarinoCPU = obstaculo(4,'Submarino', 'S', 1, [linhaCPU,colunaCPU])

for i in range(submarinoCPU.tamanho):
    matrizCPU[submarinoCPU.posicoes[0]][submarinoCPU.posicoes[1]+ i] = submarinoCPU.simbolo
    print(submarinoCPU.posicoes)
print(mostra(matrizCPU))

vencedor = True

while vencedor:
     contadorCPU  = 0
     contadorPlayer  = 0
     tiroPlayer()
     
     for w in range(9):
        for z in range(9):
             if matrizCPU[w][z] == 'S':
                 contadorPlayer += 1
     if contadorPlayer == 0:
        print('jogador ganhou')
        break

     
     
     tiroCpu()
    
     for x in range(9):
         for y in range(9):
             if matriz[x][y] == 'J' or matriz[x][y] == 'B' or matriz[x][y] == 'C' or matriz[x][y] == 'S' or matriz[x][y] == 'P':
                  contadorCPU += 1
     if contadorCPU == 0:
        print('cpu ganhou')
        break
              
    
print('fim de jogo')


# for barco in jogador1.barcos:
#      for i in range(barco.quantidade):

            

#          colocarTiro(matriz,coordenada[0],coordenada[1],0,'X')
#          tiroPlayer()
#          mostra(matriz)


# if matriz[x][y] == 'A' or matriz[x][y] == '*':
#                   vencedor = vencedor and True

#              if matrizCPU[w][z] == 'A' or matrizCPU[w][z] == '*':
#                   vencedor =vencedor and True