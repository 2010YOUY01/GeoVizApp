<form class="form-inline">
  <div class="form-group">
    <label for="superheroId">Super Hero: </label>
    <input type="datetime-local" min="2016-11-01T00:00:00" max="2016-11-30T23:59:59" class="form-control" id="superheroId" placeholder="yyyy-MM-ddTHH:mm:ss" ng-model="superhero"></input>
    <input type="datetime-local" min="2016-11-01T00:00:00" max="2016-11-30T23:59:59" class="form-control" id="superheroId" placeholder="yyyy-MM-ddTHH:mm:ss" ng-model="superhero"></input>
  </div>
  <button type="submit" class="btn btn-primary" ng-click="z.angularBind('superhero',superhero,'paragraph_1589175263942_103170873');z.runParagraph('paragraph_1589175263942_103170873')"> Bind</button>
</form>