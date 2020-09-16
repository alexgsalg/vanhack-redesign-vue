<template>
<aside class="pagefilter">
  <form class="filter">

    <div class="filter-block">
      <div class="filter-header">
        <h2 class="filter__title">Filter</h2>
      </div>
      <div class="filter-body">
        <label class="filter__item">Join Team VanHack
          <input type="checkbox" name="vanhackTeam" />
          <span class="checkmark"></span>
        </label>
        <label class="filter__item">Remote Job
          <input type="checkbox" name="remoteJob" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>

    <div class="filter-block">
      <div class="filter-header">
        <h2 class="filter__title">Location</h2>
      </div>
      <div class="filter-body">

        <div class="filter-group" :class="{ open: filterChild1 }">
          <label class="filter__item">Canada
            <input type="checkbox" name="vanhackTeam" @click="filterChild1 = !filterChild1" />
            <span class="checkmark"></span>
          </label>
          <!-- Arrow animation -->
          <div class="filter-arrow">
            <div class="rect__left"></div>
            <div class="rect__right"></div>
          </div>
          <div class="inner-filter">
            <label class="filter__item">Vancouver
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
            <label class="filter__item">Toronto
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
            <label class="filter__item">Ontário
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
            <label class="filter__item">Calgary
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
            <label class="filter__item">Kitchener
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
          </div>
        </div>

        <div class="filter-group" :class="{ open: filterChild2 }">
          <label class="filter__item">Brazil
            <input type="checkbox" name="remoteJob" @click="filterChild2 = !filterChild2" />
            <span class="checkmark"></span>
          </label>
          <!--Arrow animation -->
          <div class="filter-arrow">
            <div class="rect__left"></div>
            <div class="rect__right"></div>
          </div>
          <div class="inner-filter">
            <label class="filter__item">São Paulo
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
            <label class="filter__item">Brasília
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
            <label class="filter__item">Rio de Janeiro
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
            <label class="filter__item">Curitiba
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
            <label class="filter__item">Florianópolis
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
          </div>
        </div>

        <div class="filter-group" :class="{ open: filterChild3 }">
          <label class="filter__item">Colômbia
            <input type="checkbox" name="remoteJob" @click="filterChild3 = !filterChild3" />
            <span class="checkmark"></span>
          </label>
          <!--Arrow animation -->
          <div class="filter-arrow">
            <div class="rect__left"></div>
            <div class="rect__right"></div>
          </div>
          <div class="inner-filter">
            <label class="filter__item">Boyacá
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
          </div>
        </div>

        <div class="filter-group" :class="{ open: filterChild4 }">
          <label class="filter__item">Germany
            <input type="checkbox" name="remoteJob" @click="filterChild4 = !filterChild4" />
            <span class="checkmark"></span>
          </label>
          <!--Arrow animation -->
          <div class="filter-arrow">
            <div class="rect__left"></div>
            <div class="rect__right"></div>
          </div>
          <div class="inner-filter">
            <label class="filter__item">Berlim
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
            <label class="filter__item">Mannheim
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
          </div>
        </div>

        <div class="filter-group" :class="{ open: filterChild5 }">
          <label class="filter__item">Portugal
            <input type="checkbox" name="remoteJob" @click="filterChild5 = !filterChild5" />
            <span class="checkmark"></span>
          </label>
          <!--Arrow animation -->
          <div class="filter-arrow">
            <div class="rect__left"></div>
            <div class="rect__right"></div>
          </div>
          <div class="inner-filter">
            <label class="filter__item">Lisboa
              <input type="checkbox" name="vanhackTeam" />
              <span class="checkmark--inner"></span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="filter-block">
      <div class="filter-header">
        <h2 class="filter__title">Experience</h2>
      </div>
      <div class="filter-body">
        <label class="filter__item">1-3 years
          <input type="checkbox" name="vanhackTeam" />
          <span class="checkmark"></span>
        </label>
        <label class="filter__item">3-4 years
          <input type="checkbox" name="remoteJob" />
          <span class="checkmark"></span>
        </label>
        <label class="filter__item">+5 years
          <input type="checkbox" name="remoteJob" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>

  </form>
</aside>
</template>

<script>
export default {
  data: function () {
    return {
      filterChild1: false,
      filterChild2: false,
      filterChild3: false,
      filterChild4: false,
      filterChild5: false
    }
  },
  computed: {}
}
</script>
