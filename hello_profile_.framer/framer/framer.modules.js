require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"flipCard":[function(require,module,exports){
exports.flipCard = function(front, back, perspective, flipCurve, x, y, superLayer) {
  var container, perspectiveLayer;
  perspectiveLayer = new Layer({
    width: front.width + 60,
    height: front.height + 40,
    backgroundColor: "transparent"
  });
  perspectiveLayer.perspective = perspective;
  perspectiveLayer.x = x;
  perspectiveLayer.y = y;
  perspectiveLayer.superLayer = superLayer;
  container = new Layer({
    width: front.width,
    height: front.height,
    backgroundColor: "transparent",
    superLayer: perspectiveLayer
  });
  container.center();
  back.superLayer = container;
  front.superLayer = container;
  back.rotationY = 180;
  front.states.add({
    front: {
      opacity: 1
    },
    back: {
      opacity: 0
    }
  });
  front.states.animationOptions = {
    curve: flipCurve
  };
  front.states.switchInstant("front");
  back.states.add({
    front: {
      opacity: 0
    },
    back: {
      opacity: 1
    }
  });
  back.states.animationOptions = {
    curve: flipCurve
  };
  back.states.switchInstant("front");
  container.states.add({
    front: {
      rotationY: 0
    },
    back: {
      rotationY: 180
    }
  });
  container.states.animationOptions = {
    curve: flipCurve
  };
  container.states.switchInstant("front");
  return container.on(Events.Click, function() {
    this.states.next(["back", "front"]);
    back.states.next(["back", "front"]);
    return front.states.next(["back", "front"]);
  });
};



},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2FkZS9Eb3dubG9hZHMvRnJhbWVySlMtbWFzdGVyL2hlbGxvX3Byb2ZpbGVfLmZyYW1lci9tb2R1bGVzL2ZsaXBDYXJkLmNvZmZlZSIsIi9Vc2Vycy9jYWRlL0Rvd25sb2Fkcy9GcmFtZXJKUy1tYXN0ZXIvaGVsbG9fcHJvZmlsZV8uZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsT0FBTyxDQUFDLFFBQVIsR0FBbUIsU0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBc0MsQ0FBdEMsRUFBeUMsQ0FBekMsRUFBNEMsVUFBNUMsR0FBQTtBQUVmLE1BQUEsMkJBQUE7QUFBQSxFQUFBLGdCQUFBLEdBQXVCLElBQUEsS0FBQSxDQUNuQjtBQUFBLElBQUEsS0FBQSxFQUFPLEtBQUssQ0FBQyxLQUFOLEdBQWMsRUFBckI7QUFBQSxJQUNBLE1BQUEsRUFBUSxLQUFLLENBQUMsTUFBTixHQUFlLEVBRHZCO0FBQUEsSUFFQSxlQUFBLEVBQWlCLGFBRmpCO0dBRG1CLENBQXZCLENBQUE7QUFBQSxFQUlBLGdCQUFnQixDQUFDLFdBQWpCLEdBQStCLFdBSi9CLENBQUE7QUFBQSxFQUtBLGdCQUFnQixDQUFDLENBQWpCLEdBQXFCLENBTHJCLENBQUE7QUFBQSxFQU1BLGdCQUFnQixDQUFDLENBQWpCLEdBQXFCLENBTnJCLENBQUE7QUFBQSxFQU9BLGdCQUFnQixDQUFDLFVBQWpCLEdBQThCLFVBUDlCLENBQUE7QUFBQSxFQVNBLFNBQUEsR0FBZ0IsSUFBQSxLQUFBLENBQ1o7QUFBQSxJQUFBLEtBQUEsRUFBTyxLQUFLLENBQUMsS0FBYjtBQUFBLElBQ0EsTUFBQSxFQUFRLEtBQUssQ0FBQyxNQURkO0FBQUEsSUFFQSxlQUFBLEVBQWlCLGFBRmpCO0FBQUEsSUFHQSxVQUFBLEVBQVksZ0JBSFo7R0FEWSxDQVRoQixDQUFBO0FBQUEsRUFnQkEsU0FBUyxDQUFDLE1BQVYsQ0FBQSxDQWhCQSxDQUFBO0FBQUEsRUFtQkEsSUFBSSxDQUFDLFVBQUwsR0FBa0IsU0FuQmxCLENBQUE7QUFBQSxFQW9CQSxLQUFLLENBQUMsVUFBTixHQUFtQixTQXBCbkIsQ0FBQTtBQUFBLEVBdUJBLElBQUksQ0FBQyxTQUFMLEdBQWlCLEdBdkJqQixDQUFBO0FBQUEsRUE2QkEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFiLENBQ0k7QUFBQSxJQUFBLEtBQUEsRUFBTztBQUFBLE1BQUMsT0FBQSxFQUFTLENBQVY7S0FBUDtBQUFBLElBQ0EsSUFBQSxFQUFNO0FBQUEsTUFBQyxPQUFBLEVBQVMsQ0FBVjtLQUROO0dBREosQ0E3QkEsQ0FBQTtBQUFBLEVBZ0NBLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWIsR0FDSTtBQUFBLElBQUEsS0FBQSxFQUFPLFNBQVA7R0FqQ0osQ0FBQTtBQUFBLEVBa0NBLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYixDQUEyQixPQUEzQixDQWxDQSxDQUFBO0FBQUEsRUFvQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQ0k7QUFBQSxJQUFBLEtBQUEsRUFBTztBQUFBLE1BQUMsT0FBQSxFQUFTLENBQVY7S0FBUDtBQUFBLElBQ0EsSUFBQSxFQUFNO0FBQUEsTUFBQyxPQUFBLEVBQVMsQ0FBVjtLQUROO0dBREosQ0FwQ0EsQ0FBQTtBQUFBLEVBdUNBLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQVosR0FDSTtBQUFBLElBQUEsS0FBQSxFQUFPLFNBQVA7R0F4Q0osQ0FBQTtBQUFBLEVBeUNBLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBWixDQUEwQixPQUExQixDQXpDQSxDQUFBO0FBQUEsRUEyQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFqQixDQUNJO0FBQUEsSUFBQSxLQUFBLEVBQU87QUFBQSxNQUFDLFNBQUEsRUFBVyxDQUFaO0tBQVA7QUFBQSxJQUNBLElBQUEsRUFBTTtBQUFBLE1BQUMsU0FBQSxFQUFXLEdBQVo7S0FETjtHQURKLENBM0NBLENBQUE7QUFBQSxFQThDQSxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFqQixHQUNJO0FBQUEsSUFBQSxLQUFBLEVBQU8sU0FBUDtHQS9DSixDQUFBO0FBQUEsRUFnREEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFqQixDQUErQixPQUEvQixDQWhEQSxDQUFBO1NBaURBLFNBQVMsQ0FBQyxFQUFWLENBQWEsTUFBTSxDQUFDLEtBQXBCLEVBQTJCLFNBQUEsR0FBQTtBQUN2QixJQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBWixDQUFpQixDQUFDLE1BQUQsRUFBUSxPQUFSLENBQWpCLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFaLENBQWlCLENBQUMsTUFBRCxFQUFRLE9BQVIsQ0FBakIsQ0FEQSxDQUFBO1dBRUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFiLENBQWtCLENBQUMsTUFBRCxFQUFRLE9BQVIsQ0FBbEIsRUFIdUI7RUFBQSxDQUEzQixFQW5EZTtBQUFBLENBQW5CLENBQUE7Ozs7O0FDSUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsWUFBaEIsQ0FBQTs7QUFBQSxPQUVPLENBQUMsVUFBUixHQUFxQixTQUFBLEdBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOLEVBRG9CO0FBQUEsQ0FGckIsQ0FBQTs7QUFBQSxPQUtPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUxsQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydHMuZmxpcENhcmQgPSAoZnJvbnQsIGJhY2ssIHBlcnNwZWN0aXZlLCBmbGlwQ3VydmUsIHgsIHksIHN1cGVyTGF5ZXIpIC0+XG4gICAgIyBDcmVhdGUgYSBuZXcgY29udGFpbmVyIGxheWVyXG4gICAgcGVyc3BlY3RpdmVMYXllciA9IG5ldyBMYXllclxuICAgICAgICB3aWR0aDogZnJvbnQud2lkdGggKyA2MFxuICAgICAgICBoZWlnaHQ6IGZyb250LmhlaWdodCArIDQwXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgcGVyc3BlY3RpdmVMYXllci5wZXJzcGVjdGl2ZSA9IHBlcnNwZWN0aXZlXG4gICAgcGVyc3BlY3RpdmVMYXllci54ID0geFxuICAgIHBlcnNwZWN0aXZlTGF5ZXIueSA9IHlcbiAgICBwZXJzcGVjdGl2ZUxheWVyLnN1cGVyTGF5ZXIgPSBzdXBlckxheWVyXG4gICAgXG4gICAgY29udGFpbmVyID0gbmV3IExheWVyXG4gICAgICAgIHdpZHRoOiBmcm9udC53aWR0aFxuICAgICAgICBoZWlnaHQ6IGZyb250LmhlaWdodFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgICAgICBzdXBlckxheWVyOiBwZXJzcGVjdGl2ZUxheWVyXG5cbiAgICAjIENlbnRlciB0aGUgY29udGFpbmVyXG4gICAgY29udGFpbmVyLmNlbnRlcigpXG4gICAgXG4gICAgI1NldCBzdXBlckxheWVyIGZvciBib3RoIGZyb250IGFuZCBiYWNrIGxheWVyc1xuICAgIGJhY2suc3VwZXJMYXllciA9IGNvbnRhaW5lclxuICAgIGZyb250LnN1cGVyTGF5ZXIgPSBjb250YWluZXJcbiAgICBcbiAgICAjIFJvdGF0ZSB0aGUgYmFjayBpbWFnZSBvbiBpbnRpYWxcbiAgICBiYWNrLnJvdGF0aW9uWSA9IDE4MCAgICBcbiAgICAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICAgICMgU3RhdGVzXG4gICAgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiAgICBcbiAgICBcbiAgICBmcm9udC5zdGF0ZXMuYWRkXG4gICAgICAgIGZyb250OiB7b3BhY2l0eTogMX1cbiAgICAgICAgYmFjazoge29wYWNpdHk6IDB9XG4gICAgZnJvbnQuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuICAgICAgICBjdXJ2ZTogZmxpcEN1cnZlXG4gICAgZnJvbnQuc3RhdGVzLnN3aXRjaEluc3RhbnQoXCJmcm9udFwiKVxuICAgIFxuICAgIGJhY2suc3RhdGVzLmFkZFxuICAgICAgICBmcm9udDoge29wYWNpdHk6IDB9XG4gICAgICAgIGJhY2s6IHtvcGFjaXR5OiAxfVxuICAgIGJhY2suc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuICAgICAgICBjdXJ2ZTogZmxpcEN1cnZlXG4gICAgYmFjay5zdGF0ZXMuc3dpdGNoSW5zdGFudChcImZyb250XCIpXG4gICAgXG4gICAgY29udGFpbmVyLnN0YXRlcy5hZGRcbiAgICAgICAgZnJvbnQ6IHtyb3RhdGlvblk6IDB9XG4gICAgICAgIGJhY2s6IHtyb3RhdGlvblk6IDE4MH1cbiAgICBjb250YWluZXIuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuICAgICAgICBjdXJ2ZTogZmxpcEN1cnZlXG4gICAgY29udGFpbmVyLnN0YXRlcy5zd2l0Y2hJbnN0YW50KFwiZnJvbnRcIilcbiAgICBjb250YWluZXIub24gRXZlbnRzLkNsaWNrLCAtPlxuICAgICAgICB0aGlzLnN0YXRlcy5uZXh0KFtcImJhY2tcIixcImZyb250XCJdKVxuICAgICAgICBiYWNrLnN0YXRlcy5uZXh0KFtcImJhY2tcIixcImZyb250XCJdKVxuICAgICAgICBmcm9udC5zdGF0ZXMubmV4dChbXCJiYWNrXCIsXCJmcm9udFwiXSlcblxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
