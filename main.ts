namespace SpriteKind {
    export const enemy10 = SpriteKind.create()
    export const level50 = SpriteKind.create()
    export const levle100 = SpriteKind.create()
    export const footlong = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    timer.after(50000, function () {
        sprites.destroy(sprite, effects.disintegrate, 200)
    })
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    timer.after(20000, function () {
        sprites.destroy(sprite, effects.disintegrate, 200)
    })
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.levle100, function (sprite, otherSprite) {
    if (player_scale >= jellyboy_scale) {
        mySprite.sayText("you got a jellyfish", 500, true)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        sprites.destroy(otherSprite, effects.confetti, 500)
        player_scale += 0.05
        info.changeScoreBy(10)
    } else {
        music.stopAllSounds()
        game.gameOver(false)
        game.setGameOverMessage(false, "GAME OVER!")
        game.setGameOverScoringType(game.ScoringType.HighScore)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`shark free animation1`,
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy10, function (sprite, otherSprite) {
    if (player_scale >= enemy_10_scale) {
        sprites.destroy(otherSprite)
        player_scale += 0.01
        info.changeScoreBy(2)
    } else {
        music.stopAllSounds()
        game.gameOver(false)
        game.setGameOverMessage(false, "GAME OVER!")
        game.setGameOverScoringType(game.ScoringType.HighScore)
    }
})
info.onCountdownEnd(function () {
    tiles.placeOnTile(subwayrine, tiles.getTileLocation(randint(0, 70), randint(0, 50)))
    subwayrine.setScale(3.5, ScaleAnchor.Middle)
    subwayrine.follow(mySprite, 15)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.level50, function (sprite, otherSprite) {
    if (player_scale >= enemy_50_scale) {
        sprites.destroy(otherSprite)
        player_scale += 0.025
        info.changeScoreBy(5)
    } else {
        music.stopAllSounds()
        game.gameOver(false)
        game.setGameOverMessage(false, "GAME OVER!")
        game.setGameOverScoringType(game.ScoringType.HighScore)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`shark free animation0`,
    100,
    true
    )
})
sprites.onCreated(SpriteKind.levle100, function (sprite) {
    if (sprite.isHittingTile(CollisionDirection.Top)) {
        timer.after(1000, function () {
            sprites.destroy(sprite, effects.confetti, 500)
        })
    }
})
sprites.onCreated(SpriteKind.enemy10, function (sprite) {
    timer.after(50000, function () {
        sprites.destroy(sprite, effects.disintegrate, 200)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    player_scale += 0.005
    info.changeScoreBy(1)
})
sprites.onCreated(SpriteKind.level50, function (sprite) {
    timer.after(125000, function () {
        sprites.destroy(sprite, effects.disintegrate, 200)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.footlong, function (sprite, otherSprite) {
    if (info.score() >= 250) {
        music.stopAllSounds()
        sprites.destroy(otherSprite, effects.hearts, 2000)
        game.gameOver(true)
        game.setGameOverMessage(true, "YOU ARE THE ULTIMATE MEGLADON")
        effects.confetti.startScreenEffect(1000)
        game.setGameOverScoringType(game.ScoringType.HighScore)
    } else {
        music.stopAllSounds()
        game.gameOver(false)
        game.setGameOverMessage(false, "GAME OVER!")
        game.setGameOverScoringType(game.ScoringType.HighScore)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (player_scale >= enemy_2_scale) {
        sprites.destroy(otherSprite)
        player_scale += 0.005
        info.changeScoreBy(1)
    } else {
        music.stopAllSounds()
        game.gameOver(false)
        game.setGameOverMessage(false, "GAME OVER!")
        game.setGameOverScoringType(game.ScoringType.HighScore)
    }
})
let foody: Sprite = null
let enemy_10: Sprite = null
let clam: Sprite = null
let jellyboy: Sprite = null
let enemy_50: Sprite = null
let enemy_2: Sprite = null
let subwayrine: Sprite = null
let jellyboy_scale = 0
let enemy_50_scale = 0
let enemy_10_scale = 0
let enemy_2_scale = 0
let player_scale = 0
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`back ground`)
music.play(music.createSong(hex`0078000408040105001c000f0a006400f4010a00000400000000000000000000000000000000024e0000000400011d0c001000011d20002400011d2c003000011d3400380001194000440001164c005000011658005c0001186000640001196c007000011974007800011878007c0001187c0080000118`), music.PlaybackMode.LoopingInBackground)
game.splash("made by liam riordan")
game.splash("please enjoy ")
game.setDialogTextColor(15)
game.setDialogFrame(img`
    ..................................................................
    ............fff........fff.............fff..............ffff......
    ...........fddbf......fbdbf...........fbdbf............fbddf......
    ...........fddbbf.....fdddffff........fdddffff...fff..ffddbff.....
    ...........fddddffffffbdddbddbffffffffbdddbddbffffddffddddddf.....
    ...fff....fdddddfddddddddbbddddddddddddddbbddddddfdddddbccddf.....
    .fffddf..fddffffddddddddddbbddddddddddddddbbdddddffbddbbddff......
    .fdbddfffddfffdddfffffbdddbddbffffffffbdddbddbfffefddccbddf.......
    .fdddcddddffeffffeeeeefbdbfddfeeeeeeeefbdbfddfeeeefffcddddf.......
    .fbddcddddfeeeeeeeeeeeefffffffeeeeeeeeefffffffeeeeeeefdddddf......
    ..ffdbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddf.....
    ...fddbcddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfff..
    ....fddccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddf.
    ....fdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddddf.
    ...fddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbbf.
    ...fddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbf..
    ...ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddfff...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
    ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
    .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
    .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
    .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
    ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
    ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
    .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
    .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
    .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
    ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
    ...fffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff...
    ..fbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddf...
    .fbbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbddf...
    .fddddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddf....
    .fddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccddf....
    ..fffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddcbddf...
    .....fddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbbbdff..
    ......fdddddfeeeeeeefffffffeeeeeeeeefffffffeeeeeeeeeeeefddddcddbf.
    .......fddddcfffeeeefddfbdbfeeeeeeeefddfbdbfeeeeeffffeffddddcdddf.
    .......fddbccddfefffbddbdddbffffffffbddbdddbfffffdddfffddfffddbdf.
    ......ffddbbddbffdddddbbddddddddddddddbbddddddddddffffddf..fddfff.
    .....fddccbdddddfddddddbbddddddddddddddbbddddddddfdddddf....fff...
    .....fddddddffddffffbddbdddbffffffffbddbdddbffffffddddf...........
    .....ffbddff..fff...ffffdddf........ffffdddf.....fbbddf...........
    ......fddbf............fbdbf...........fbdbf......fbddf...........
    ......ffff..............fff.............fff........fff............
    ..................................................................
    `)
game.showLongText("MEGLADON SIMULATOR", DialogLayout.Top)
game.setDialogFrame(img`
    .....cccccccccccccc.....
    ...cbd111111111111dbc...
    ..cd1111111111111111dc..
    .cd111111111111111111dc.
    .b11111111111111111111b.
    cd11111111111111111111dc
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    cd11111111111111111111dc
    cb11111111111111111111bc
    ccd111111111111111111dc.
    .ccd1111111111111111dcc.
    ..c111111111111111dbcc..
    .b11dcccccccccccccccc...
    cddcccccccccccccccc.....
    ccccc...................
    `)
game.setDialogTextColor(8)
game.showLongText("when the timer runs down a sub will spawn EAT IT at 250 score", DialogLayout.Center)
game.showLongText("eat fish that are smaller than you ", DialogLayout.Center)
game.showLongText("eat meat untill you are at 3 score", DialogLayout.Center)
game.showLongText("use w a s d or arow keys to move", DialogLayout.Center)
game.showLongText("press a to start ", DialogLayout.Top)
music.stopAllSounds()
music.play(music.createSong(hex`0078000408040403001c0001dc00690000045e01000400000000000000000000056400010400037e0000000400030c202408000c00010f0c00100002202410001400010c18001c00011220002400030c202428002c00010f2c00300002202430003400010c38003c00011240004400030c191d48004c00010f4c00500002191d50005400010c58005c00011260006400030c1d2068006c00010f6c007000021d2070007400010c05001c000f0a006400f4010a00000400000000000000000000000000000000024e0000000400011d0c001000011d20002400011d2c003000011d3400380001194000440001164c005000011658005c0001186000640001196c007000011974007800011878007c0001187c008000011806001c00010a006400f4016400000400000000000000000000000000000000026d0000000400011108000c00011410001400011118001c00011820002400011128002c00011430003400011134003800011938003c0001184000440002111648004c0001144c005000011650005400011158005c00011860006400011168006c00011470007400011178007c00011809010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800a0000000010002000108000900030002040c000d000101100011000100140015000104180019000200022000210002000128002900030002042c002d000101300031000100340035000104380039000200024000410002000148004900030002044c004d000101500051000100540055000104580059000200026000610002000168006900030002046c006d00010170007100010074007500010478007900020002`), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`waterer`)
mySprite = sprites.create(assets.image`fish`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`player 2`, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.startCountdown(240)
info.setScore(0)
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 50, 50)
tiles.placeOnTile(mySprite, tiles.getTileLocation(randint(0, 70), randint(0, 50)))
player_scale = 0.5
enemy_2_scale = 0.515
enemy_10_scale = 0.55
enemy_50_scale = 0.75
jellyboy_scale = 1
subwayrine = sprites.create(assets.image`subwayrine`, SpriteKind.footlong)
game.onUpdate(function () {
    for (let enemy_22 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (enemy_22.vx > 1) {
            enemy_22.setImage(assets.image`level  2 right`)
        } else {
            if (enemy_22.vx < -1) {
                enemy_22.setImage(assets.image`level 2`)
            }
        }
    }
    for (let enemy_102 of sprites.allOfKind(SpriteKind.enemy10)) {
        if (enemy_102.vx > 1) {
            enemy_102.setImage(assets.image`level 1`)
        } else {
            if (enemy_102.vx < -1) {
                enemy_102.setImage(assets.image`level 10 lefty`)
            }
        }
    }
    for (let enemy_502 of sprites.allOfKind(SpriteKind.level50)) {
        if (enemy_502.vx > 1) {
            enemy_502.setImage(assets.image`level 50 right`)
        } else {
            if (enemy_502.vx < -1) {
                enemy_502.setImage(assets.image`level 50 leftywoo`)
            }
        }
    }
    for (let subwayrine of sprites.allOfKind(SpriteKind.footlong)) {
        if (subwayrine.vx > 1) {
            subwayrine.setImage(assets.image`subwayrine`)
        } else {
            if (subwayrine.vx < -1) {
                subwayrine.setImage(assets.image`subwayrine left`)
            }
        }
    }
})
game.onUpdateInterval(7000, function () {
    enemy_2 = sprites.create(assets.image`level 2`, SpriteKind.Enemy)
    tiles.placeOnTile(enemy_2, tiles.getTileLocation(randint(mySprite.y / 16 + 1, mySprite.y / 16 + -10), randint(mySprite.x / 16 + 10, mySprite.x / 16 + -1)))
    enemy_2.setScale(enemy_2_scale, ScaleAnchor.Middle)
    enemy_2.follow(mySprite, 33)
})
game.onUpdateInterval(50000, function () {
    timer.after(50000, function () {
        enemy_50 = sprites.create(assets.image`level 50 right`, SpriteKind.level50)
        tiles.placeOnTile(enemy_50, tiles.getTileLocation(randint(mySprite.y / 16 + 10, mySprite.y / 16 + -10), randint(mySprite.x / 16 + 10, mySprite.x / 16 + -10)))
        enemy_50.setScale(enemy_50_scale, ScaleAnchor.Middle)
        enemy_50.follow(mySprite, 20)
    })
})
game.onUpdateInterval(50000, function () {
    timer.after(50000, function () {
        jellyboy = sprites.create(assets.image`jellyfish`, SpriteKind.levle100)
        tiles.placeOnTile(jellyboy, tiles.getTileLocation(mySprite.x / 16, 50))
        jellyboy.setScale(jellyboy_scale, ScaleAnchor.Middle)
        jellyboy.setVelocity(0, -24)
        animation.runImageAnimation(
        jellyboy,
        assets.animation`jelly finsh`,
        200,
        true
        )
        if (true) {
        	
        }
    })
})
game.onUpdateInterval(60000, function () {
    clam = sprites.create(assets.image`clam`, SpriteKind.level50)
    tiles.placeOnRandomTile(clam, sprites.builtin.coral0)
})
forever(function () {
    mySprite.setScale(player_scale, ScaleAnchor.Middle)
})
game.onUpdateInterval(12500, function () {
    timer.after(12500, function () {
        enemy_10 = sprites.create(assets.image`level 10 lefty`, SpriteKind.enemy10)
        tiles.placeOnTile(enemy_10, tiles.getTileLocation(randint(mySprite.y / 16 + 10, mySprite.y / 16 + -10), randint(mySprite.x / 16 + 10, mySprite.x / 16 + -10)))
        enemy_10.setScale(enemy_10_scale, ScaleAnchor.Middle)
        enemy_10.follow(mySprite, 23)
    })
})
game.onUpdateInterval(500, function () {
    foody = sprites.create(assets.image`FOOD`, SpriteKind.Food)
    tiles.placeOnTile(foody, tiles.getTileLocation(randint(0, 70), randint(0, 50)))
    foody.setScale(0.5, ScaleAnchor.Middle)
})
