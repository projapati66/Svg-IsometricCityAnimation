/**
 * main.js
 * http://www.designtheway.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, DesignTheWay
 * http://www.designtheway.com
 */

$(function() {
    
    var $building1 = $('#building1'),
        $building2 = $('#building2'),
        $building3 = $('#building3'),
        $building4 = $('#building4'),
        $building5 = $('#building5'),
        $building6 = $('#building6'),
        $building7 = $('#building7'),
        $building8 = $('#building8'),
        $building9 = $('#building9'),
        $building10 = $('#building10'),
        $building11 = $('#building11'),
        $building12 = $('#building12'),
        $building13 = $('#building13'),
        $building14 = $('#building14'),
        $building15 = $('#building15'),
        $building16 = $('#building16'),
        $building17 = $('#building17'),
        $building18 = $('#building18'),
        $building19 = $('#building19'),
        $building20 = $('#building20'),
        $mainBuilding = $('#main_building'),
        $building1Cube1 = $('#building1_cube1'),
        $building1Cube2 = $('#building1_cube2'),
        $building1Cube3 = $('#building1_cube3'),
        $building1Box1 = $('#building1_box1'),
        $building1Box2 = $('#building1_box2'),
        $building3Box1 = $('#building3_box1'),
        $building3Box2 = $('#building3_box2'),
        $building3Box3 = $('#building3_box3'),
        $building3Box4 = $('#building3_box4'),
        $building5Cube1 = $('#building5_cube1'),
        $building5Cube2 = $('#building5_cube2'),
        $building5Box1 = $('#building5_box1'),
        $building6Cube1 = $('#building6_cube1'),
        $building6Box1 = $('#building6_box1'),
        $building8Cube1 = $('#building8_cube1'),
        $building8Box1 = $('#building8_box1'),
        $building10Box1 = $('#building10_box1'),
        $building11Cube1 = $('#building11_cube1'),
        $building11Cube2 = $('#building11_cube2'),
        $building11Box1 = $('#building11_box1'),
        $building11Box2 = $('#building11_box2'),
        $building12Cube1 = $('#building12_cube1'),
        $building12Cube2 = $('#building12_cube2'),
        $building12Box1 = $('#building12_box1'),
        $building12Box2 = $('#building12_box2'),
        $building13Cube1 = $('#building13_cube1'),
        $building13Cube2 = $('#building13_cube2'),
        $building13Box1 = $('#building13_box1'),
        $building14Box1 = $('#building14_box1'),
        $building14Box2 = $('#building14_box2'),
        $building14Box3 = $('#building14_box3'),
        $building14Box4 = $('#building14_box4'),
        $building16Cube1 = $('#building16_cube1'),
        $building16Box1 = $('#building16_box1'),
        $building16Box2 = $('#building16_box2'),
        $building17Cube1 = $('#building17_cube1'),
        $building17Box1 = $('#building17_box1'),
        $building17Box2 = $('#building17_box2'),
        $building18Cube1 = $('#building18_cube1'),
        $building18Cube2 = $('#building18_cube2'),
        $building18Box1 = $('#building18_box1'),
        $building18Box2 = $('#building18_box2'),
        $building18Box3 = $('#building18_box3'),
        $building18Box4 = $('#building18_box4'),
        $building20Cube1 = $('#building20_cube1'),
        $building20Box1 = $('#building20_box1'),
        $building20Box2 = $('#building20_box2'),
        $mainBuildingCube1 = $('#main_building_cube1'),
        $mainBuildingBox1 = $('#main_building_box1'),
        $mainBuildingBox2 = $('#main_building_box2'),
        $mainBuildingBox3 = $('#main_building_box3'),
        $mainBuildingBox4 = $('#main_building_box4'),
        $smallTrees = $('#small_trees'),
        $leftTrees = $('#trees_left'),   
        $rightTrees = $('#trees_right'),
        $fancing = $('#fancing'),
        $fancingSurface = $('#fancing_surface'),
        $chairs = $('#chairs'),
        $ground = $('#ground'),
        $roads = $('#roads'),
        $buildingSurface = $('#building_surface'),
        $redCar = $('#red_car'),
        $redCarLeft = $('#red_car_l'),
        $redCarFlip = $('#red_car_f'),
        $redCar1 = $('#red_car1'),
        $blueCar = $('#blue_car'),
        $blueCarRight = $('#blue_car_r'),
        $blueCarFlip = $('#blue_car_f'),
        $blueCar1 = $('#blue_car1'),
        $fancingMask = $('#fancing_mask'),
        redCarPath01 = [{x: 0, y: 0},{x: 157.85, y: 90.7},{x: 315.7, y: 181.4}],
        redCarPath02 = [{x: 0, y: 0},{x: -99.15, y: 56.2},{x: -198.3, y: 112.4}],
        redCarPath03 = [{x: 0, y: 0},{x: -157.65, y: -90.3},{x: -315.3, y: -180.6}],
        blueCarPath01 = [{x: 0, y: 0},{x: 153.35, y: 87.2},{x: 306.7, y: 174.4}],
        blueCarPath02 = [{x: 0, y: 0},{x: 88.15, y: -50.2},{x: 176.3, y: -100.4}],
        blueCarPath03 = [{x: 0, y: 0},{x: -153.15, y: -86.8},{x: -306.3, y: -173.6}],
        redCarPathSt = [{x: 0, y: 0},{x: -235.15, y: 132.7},{x: -470.3, y: 265.4}],
        blueCarPathSt = [{x: 0, y: 0},{x: 235.15, y: -132.7},{x: 470.3, y: -265.4}],
        $mainContainer = $('#main_group'),
        $buildingHording = $('#building3_banner'),
        $text01 = $('#text1'),
        $text02 = $('#text2'),
        $text03 = $('#text3'),
        $bannerBg = $('#banner_bg'),
        mainTl = new TimelineMax();


    
    // Main Building    
    function getMainBuildingTl(){ 
      var mainBuildingTl = new TimelineMax();

      mainBuildingTl
        .set($mainBuilding, {autoAlpha: 1, immediateRender: false})
        .from($mainBuilding, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($mainBuilding, 0.5, {scale: 1, ease:Back.easeIn})
        .add('mainbuilding')
        .fromTo($mainBuildingCube1, 0.2, {y: '-=10px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.2')
        .fromTo($mainBuildingBox1, 0.2, {y: '-=10px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.2')
        .fromTo($mainBuildingBox2, 0.2, {y: '-=15px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .fromTo($mainBuildingBox3, 0.2, {y: '-=25px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.4')
        .fromTo($mainBuildingBox4, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.6');

      return mainBuildingTl;
    }

    // Building 1
    function getBuilding1Tl(){ 
      var building1Tl = new TimelineMax();

      building1Tl
        .set($building1, {autoAlpha: 1, immediateRender: false})
        .from($building1, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building1, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building1')
        .fromTo($building1Cube1, 0.2, {y: '-=10px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.2')
        .fromTo($building1Cube2, 0.2, {y: '-=15px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .fromTo($building1Cube3, 0.2, {y: '-=25px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.4')
        .fromTo($building1Box1, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.6')
        .fromTo($building1Box2, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.6');

      return building1Tl;
    }

    // Building 2
    function getBuilding2Tl(){ 
      var building2Tl = new TimelineMax();

      building2Tl
        .set($building2, {autoAlpha: 1, immediateRender: false})
        .from($building2, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building2, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building2');

      return building2Tl;
    }

    // Building 3
    function getBuilding3Tl(){ 
      var building3Tl = new TimelineMax();

      building3Tl
        .set($building3, {autoAlpha: 1, immediateRender: false})
        .from($building3, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building3, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building3')
        .fromTo($building3Box1, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .fromTo($building3Box2, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.3')
        .fromTo($building3Box3, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.5')
        .fromTo($building3Box4, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.6');

      return building3Tl;
    }

    // Building 4
    function getBuilding4Tl(){ 
      var building4Tl = new TimelineMax();

      building4Tl
        .set($building4, {autoAlpha: 1, immediateRender: false})
        .from($building4, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building4, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building4');

      return building4Tl;
    }

    // Building 5
    function getBuilding5Tl(){ 
      var building5Tl = new TimelineMax();

      building5Tl
        .set($building5, {autoAlpha: 1, immediateRender: false})
        .from($building5, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building5, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building5')
        .fromTo($building5Cube1, 0.2, {y: '-=25px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .fromTo($building5Cube2, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.3')
        .fromTo($building5Box1, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.5');

      return building5Tl;
    }

    // Building 6
    function getBuilding6Tl(){ 
      var building6Tl = new TimelineMax();

      building6Tl
        .set($building6, {autoAlpha: 1, immediateRender: false})
        .from($building6, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building6, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building6')
        .fromTo($building6Cube1, 0.2, {y: '-=25px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.4')
        .fromTo($building6Box1, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.6');

      return building6Tl;
    }

    // Building 7
    function getBuilding7Tl(){ 
      var building7Tl = new TimelineMax();

      building7Tl
        .set($building7, {autoAlpha: 1, immediateRender: false})
        .from($building7, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building7, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building7');

      return building7Tl;
    }

    // Building 8
    function getBuilding8Tl(){ 
      var building8Tl = new TimelineMax();

      building8Tl
        .set($building8, {autoAlpha: 1, immediateRender: false})
        .from($building8, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building8, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building8')
        .fromTo($building8Cube1, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.3')
        .fromTo($building8Box1, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.5');;

      return building8Tl;
    }

    // Building 9
    function getBuilding9Tl(){ 
      var building9Tl = new TimelineMax();

      building9Tl
        .set($building9, {autoAlpha: 1, immediateRender: false})
        .from($building9, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building9, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building9');

      return building9Tl;
    }

    // Building 10
    function getBuilding10Tl(){ 
      var building10Tl = new TimelineMax();

      building10Tl
        .set($building10, {autoAlpha: 1, immediateRender: false})
        .from($building10, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building10, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building10')
        .fromTo($building10Box1, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.2');

      return building10Tl;
    }

    // Building 11
    function getBuilding11Tl(){ 
      var building11Tl = new TimelineMax();

      building11Tl
        .set($building11, {autoAlpha: 1, immediateRender: false})
        .from($building11, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building11, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building11')
        .fromTo($building11Cube1, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .fromTo($building11Cube2, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.3')
        .fromTo($building11Box1, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.5')
        .fromTo($building11Box2, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.6');

      return building11Tl;
    }

    // Building 12
    function getBuilding12Tl(){ 
      var building12Tl = new TimelineMax();

      building12Tl
        .set($building12, {autoAlpha: 1, immediateRender: false})
        .from($building12, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building12, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building12')
        .fromTo($building12Cube1, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .fromTo($building12Cube2, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.3')
        .fromTo($building12Box1, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.5')
        .fromTo($building12Box2, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.6');

      return building12Tl;
    }

    // Building 13
    function getBuilding13Tl(){ 
      var building13Tl = new TimelineMax();

      building13Tl
        .set($building13, {autoAlpha: 1, immediateRender: false})
        .from($building13, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building13, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building13')
        .fromTo($building13Cube1, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .fromTo($building13Cube2, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.3')
        .fromTo($building13Box1, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.5');

      return building13Tl;
    }

    // Building 14
    function getBuilding14Tl(){ 
      var building14Tl = new TimelineMax();

      building14Tl
        .set($building14, {autoAlpha: 1, immediateRender: false})
        .from($building14, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building14, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building14')
        .fromTo($building14Box1, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .fromTo($building14Box2, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.3')
        .fromTo($building14Box3, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.5')
        .fromTo($building14Box4, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.6');

      return building14Tl;
    }

    // Building 15
    function getBuilding15Tl(){ 
      var building15Tl = new TimelineMax();

      building15Tl
        .set($building15, {autoAlpha: 1, immediateRender: false})
        .from($building15, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building15, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building15');

      return building15Tl;
    }

    // Building 16
    function getBuilding16Tl(){ 
      var building16Tl = new TimelineMax();

      building16Tl
        .set($building16, {autoAlpha: 1, immediateRender: false})
        .from($building16, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building16, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building16')
        .fromTo($building16Cube1, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .fromTo($building16Box1, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.3')
        .fromTo($building16Box2, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.5');

      return building16Tl;
    }

    // Building 17
    function getBuilding17Tl(){ 
      var building17Tl = new TimelineMax();

      building17Tl
        .set($building17, {autoAlpha: 1, immediateRender: false})
        .from($building17, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building17, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building17')
        .fromTo($building17Cube1, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .fromTo($building17Box1, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.3')
        .fromTo($building17Box2, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.5');

      return building17Tl;
    }

    // Building 18
    function getBuilding18Tl(){ 
      var building18Tl = new TimelineMax();

      building18Tl
        .set($building18, {autoAlpha: 1, immediateRender: false})
        .from($building18, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building18, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building18')
        .fromTo($building18Cube1, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .fromTo($building18Cube2, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.3')
        .fromTo($building18Box1, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.4')
        .fromTo($building18Box2, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.5')
        .fromTo($building18Box3, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.6')
        .fromTo($building18Box4, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.7');

      return building18Tl;
    }

    // Building 19
    function getBuilding19Tl(){ 
      var building19Tl = new TimelineMax();

      building19Tl
        .set($building19, {autoAlpha: 1, immediateRender: false})
        .from($building19, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building19, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building19');

      return building19Tl;
    }

    // Building 20
    function getBuilding20Tl(){ 
      var building20Tl = new TimelineMax();

      building20Tl
        .set($building20, {autoAlpha: 1, immediateRender: false})
        .from($building20, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($building20, 0.5, {scale: 1, ease:Back.easeIn})
        .add('building20')
        .fromTo($building20Cube1, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .fromTo($building20Box1, 0.2, {y: '-=20px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.3')
        .fromTo($building20Box2, 0.2, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.5');

      return building20Tl;
    }


    // Treeleft
    var leftTreeTl = new TimelineMax();

      leftTreeTl
        .set($leftTrees, {autoAlpha: 1, immediateRender: false})
        .from($leftTrees, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($leftTrees, 0.5, {scale: 1, ease:Back.easeIn})
        .add('left-trees-in');

    // Treeleft
    var rightTreeTl = new TimelineMax();

      rightTreeTl
        .set($rightTrees, {autoAlpha: 1, immediateRender: false})
        .from($rightTrees, 0.5, {scale: 0, transformOrigin: 'center bottom', ease:Bounce.easeOut})
        .to($rightTrees, 0.5, {scale: 1, ease:Back.easeIn})
        .add('right-trees-in');

     // Fancing
    var fancingTl = new TimelineMax();

      fancingTl
        .set($fancing, {autoAlpha: 1, immediateRender: false})
        .fromTo($fancingMask, 1, {y: '60px', autoAlpha:0 }, {y: '0', autoAlpha:1, ease: Power4.easeInOut})
        .add('fancing-in'); 

    // Garden
    function getGardenTl(){ 
      var gardenTl = new TimelineMax();

      gardenTl
        .to($smallTrees, 0.2, {autoAlpha: 1, ease: Power4.easeInOut})
        .add([leftTreeTl, rightTreeTl])
        .add('trees-in')
        .to($fancingSurface, 0.2, {autoAlpha: 1, ease: Power4.easeInOut}, 'trees-in-=0.8')
        .add(fancingTl, 'trees-in-=0.9')
        .fromTo($chairs, 0.5, {y: '-=35px'}, {y: '0', autoAlpha: 1, ease: Power4.easeInOut}, '-=0.1')
        .add('garden');

      return gardenTl;
    }

    // RedCar
    function getRedCarTl(){ 
      var redCarTl = new TimelineMax({repeat: -1});

      redCarTl
        .set($redCar, {autoAlpha:1, immediateRender: false})
        .to($redCar, 3, {bezier: {curviness:0, values: redCarPath01}, ease:Linear.easeNone})
        .set($redCar, {autoAlpha:0})
        .set($redCarLeft, {autoAlpha:1})
        .add('car-turn-left')
        .to($redCarLeft, 2, {bezier: {curviness:0, values: redCarPath02}, ease:Linear.easeNone})
        .add('car-turn-right')
        .set($redCarLeft, {autoAlpha:0})
        .set($redCarFlip, {autoAlpha:1})
        .to($redCarFlip, 3, {bezier: {curviness:0, values: redCarPath03}, ease:Linear.easeNone})
        .set($redCarFlip, {autoAlpha:0})

      return redCarTl;
    }

    // BlueCar
    function getBlueCarTl(){ 
      var blueCarTl = new TimelineMax({repeat: -1});

      blueCarTl
        .set($blueCar, {autoAlpha:1, immediateRender: false})
        .to($blueCar, 4, {bezier: {curviness:0, values: blueCarPath01}, ease:Linear.easeNone})
        .set($blueCar, {autoAlpha:0})
        .set($blueCarRight, {autoAlpha:1})
        .to($blueCarRight, 2.5, {bezier: {curviness:0, values: blueCarPath02}, ease:Linear.easeNone})
        .set($blueCarRight, {autoAlpha:0})
        .set($blueCarFlip, {autoAlpha:1})
        .to($blueCarFlip, 4, {bezier: {curviness:0, values: blueCarPath03}, ease:Linear.easeNone})
        .set($blueCarFlip, {autoAlpha:0})

      return blueCarTl;
    }

    // RedCar Stright
    function getRedCarStTl(){ 
      var redCarStTl = new TimelineMax({repeat: -1});

      redCarStTl
        .set($redCar1, {autoAlpha:1, immediateRender: false})
        .to($redCar1, 3.5, {bezier: {curviness:0, values: redCarPathSt}, ease:Linear.easeNone})
        .set($redCar1, {autoAlpha:0})

      return redCarStTl;
    }

    // BlueCar Stright
    function getBlueCarStTl(){ 
      var blueCarStTl = new TimelineMax({repeat: -1});

      blueCarStTl
        .set($blueCar1, {autoAlpha:1, immediateRender: false})
        .to($blueCar1, 3, {bezier: {curviness:0, values: blueCarPathSt}, ease:Linear.easeNone})
        .set($blueCar1, {autoAlpha:0})

      return blueCarStTl;
    }

    //Banner Flashing
    var bannerFlashTl = new TimelineMax({repeat: -1});

    bannerFlashTl
        .set($bannerBg, {fill: '#D1B115'})
        .set($text01, {autoAlpha:1})
        .set($text01, {autoAlpha:0}, '+=1')
        .add('text2')
        .to($bannerBg, 0.3, {fill: '#DD4337'}, 'text2-=0.1')
        .set($text02, {autoAlpha:1}, 'text2')
        .set($text02, {autoAlpha:0}, 'text2+=1')
        .add('text3')
        .to($bannerBg, 0.3, {fill: '#68923f'}, 'text3-=0.1')
        .set($text03, {autoAlpha:1}, 'text3')
        .set($text03, {autoAlpha:0}, 'text3+=3')


    // Building Hording
    function getBuildingHordingTl(){ 
      var buildingHordingTl = new TimelineMax();

      buildingHordingTl
        .set($buildingHording, {autoAlpha: 1, immediateRender: false})
        .from($buildingHording, 0.5, {scale: 0, transformOrigin: 'center top', ease:Bounce.easeOut})
        .to($buildingHording, 0.5, {scale: 1, ease:Back.easeIn})
        .add('banner-in')
        .add(bannerFlashTl, '+=0.5')

      return buildingHordingTl;
    }
    

    function init(){

    mainTl
      .fromTo($ground, 1, {y: '-=50%', autoAlpha:0 }, {y: '0%', autoAlpha:1, ease:Bounce.easeOut})
      .add('ground-in')
      .fromTo($buildingSurface, 0.5, {autoAlpha:0}, {autoAlpha:1, ease:Linear.easeNone}, 'ground-in')
      .add('building-surface-in')
      .add(getMainBuildingTl())
      .add(getBuilding1Tl(), 'mainbuilding-=0.9')
      .add(getBuilding2Tl(), 'building1-=0.9')
      .add(getBuilding3Tl(), 'building2-=0.9')
      .add(getBuilding4Tl(), 'building3-=0.9')
      .add(getBuilding5Tl(), 'building1-=0.9')
      .add(getBuilding6Tl(), 'building2-=0.9')
      .add(getBuilding7Tl(), 'building4-=0.9')
      .add(getBuilding8Tl(), 'building3-=0.9')
      .add(getBuilding9Tl(), 'building2-=0.9')
      .add(getBuilding10Tl(), 'building1-=0.9')
      .add(getBuilding11Tl(), 'building5-=0.9')
      .add(getBuilding12Tl(), 'building3-=0.9')
      .add(getBuilding13Tl(), 'building2-=0.9')
      .add(getBuilding14Tl(), 'building4-=0.9')
      .add(getBuilding15Tl(), 'building6-=0.9')
      .add(getBuilding16Tl(), 'building2-=0.9')
      .add(getBuilding17Tl(), 'building3-=0.9')
      .add(getBuilding18Tl(), 'building4-=1.5')
      .add(getBuilding19Tl(), 'building10-=0.9')
      .add(getBuilding20Tl(), 'building5-=0.9')
      .add(getGardenTl(), 'building5-=0.9')
      .fromTo($roads, 0.5, {autoAlpha:0}, {autoAlpha:1, ease:Linear.easeNone}, 'garden-=1')
      .add(getBuildingHordingTl(), 'garden-=0.5')
      .add([getRedCarTl(), getBlueCarStTl()], 'garden+=0.5')
      .add([getBlueCarTl(), getRedCarStTl()], 'garden+=1.5');
  }
  init();
});
