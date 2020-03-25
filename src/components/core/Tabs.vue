<template>
  <div class="tabs-wrapper" :id="id" :class="custom_class">
    <ul class="ul tabs">
      <li v-for="(tab,i) in tabs" :key="i" class="tab" v-bind:class="{ 'is-active': tab.active }">
        <div>
          <div class="tab__name">{{tab.name}}</div>
          <div class="tab__tag">{{tab.quantity}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    custom_class: String,
    id: String,
    tabs: Array
  }
};
</script>

<style>
ul {
  list-style: none;
  display: flex;
  padding-inline-start: 0;
}

li {
  display: inline-block;
  margin-right: 15px;
}

.tab__name {
  display: inline-block;
  margin-right: 6px;
  font-size: 24px;
  text-transform: capitalize;
}

.tab__tag {
  font-size: 10px;
  display: inline-block;
  border-radius: 10px;
  background-color: #c4c4c4;
  padding: 1px 8px;
}

.tab {
  cursor: pointer;
  border-bottom: 6px transparent solid;
}

/* Primary */
.tabs-wrapper.is-primary .tab.is-active {
  border-bottom: 6px #007bff solid;
}

.tabs-wrapper.is-primary .tab.is-active .tab__tag {
  background-color: #007bff;
  color: #fff;
}

.tabs-wrapper.is-primary .tab:hover {
  border-bottom: 6px #007bff solid;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.tabs-wrapper.is-primary .tab:hover .tab__tag {
  background-color: #007bff;
  color: #fff;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

/* Warning */
.tabs-wrapper.is-warning .tab.is-active {
  border-bottom: 6px #ffc107 solid;
}

.tabs-wrapper.is-warning .tab.is-active .tab__tag {
  background-color: #ffc107;
  color: #000;
}

.tabs-wrapper.is-warning .tab:hover {
  border-bottom: 6px #ffc107 solid;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.tabs-wrapper.is-warning .tab:hover .tab__tag {
  background-color: #ffc107;
  color: #000;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

/* Danger */
.tabs-wrapper.is-danger .tab.is-active {
  border-bottom: 6px #dc3545 solid;
}

.tabs-wrapper.is-danger .tab.is-active .tab__tag {
  background-color: #dc3545;
  color: #fff;
}

.tabs-wrapper.is-danger .tab:hover {
  border-bottom: 6px #dc3545 solid;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.tabs-wrapper.is-danger .tab:hover .tab__tag {
  background-color: #dc3545;
  color: #fff;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

/* Success */
.tabs-wrapper.is-success .tab.is-active {
  border-bottom: 6px #28a745 solid;
}

.tabs-wrapper.is-success .tab.is-active .tab__tag {
  background-color: #28a745;
  color: #fff;
}

.tabs-wrapper.is-success .tab:hover {
  border-bottom: 6px #28a745 solid;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.tabs-wrapper.is-success .tab:hover .tab__tag {
  background-color: #28a745;
  color: #fff;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
</style>