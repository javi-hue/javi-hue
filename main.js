import pygame
import random 

#inicializacon
pygame.init()
ANCHO,ALTO=600,400
TAM_CELDA =20
pantalla=pygame.display.set_caption("snake")

#colores
VERDE=(0,255,0)
ROJO=(255,0,0)
NEGRO=(0,0,0)

#reloj
reloj=pygame.time.Clock()

#funcion principal
def juego():
  x,y=ANCHO//2,ALTO//2
  dx,dy=0,0
  serpiente=[(x,y)]
  longitud=1
  comida=generar_comida()
  puntuacion=0

corriendo=true 
while corriendo:
  for evento in pygame.event.get():
    if event.type==pygame.QUIT:
      corriendo=false
    elif evento.type == pygame.KEYDOWN:
                if evento.key == pygame.K_UP and dy == 0:
                    dx, dy = 0, -TAM_CELDA
                elif evento.key == pygame.K_DOWN and dy == 0:
                    dx, dy = 0, TAM_CELDA
                elif evento.key == pygame.K_LEFT and dx == 0:
                    dx, dy = -TAM_CELDA, 0
                elif evento.key == pygame.K_RIGHT and dx == 0:
                    dx, dy = TAM_CELDA, 0

x+=dx
y+=dy

cabeza=(x,y)

if x<0 or x>= ANCHO or y<0 or y>=ALTO or cabeza in serpiente:
  print ("perdiste,puntuación:", puntuacion)
  corriendo=false
  continue 

serpiente.append(cabeza)
if len(serpiente)>longitud:
  serpiente.pop(0)

if cabeza==comida:
  longitud+=1
  puntuacion+=1
  comida=generar_comida()

pantalla.fill(NEGRO)
pygame.draw.rect(pantalla,ROJO,(*comida,TAM_CELDA,TAM_CELDA))

pygame.display.flip()
reloj.tick(10)

pyhame.quit()

def generar_comida():
  x=random.randint(0,(ANCHO-TAM_CELDA)//TAM_CELDA)*TAM_CELDA
  y=random.randint(0,(ALTO-TAM_CELDA)//TAM_CELDA)*TAM_CELDA
  return (x,y)

#ejecutar juego
juego()
