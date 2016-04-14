"use strict";

export default class aboutController {
  constructor($scope, $uibModal, $log) {
    let vm = this;
    vm.open = vm.open;
    vm.$uibModal = $uibModal;
    vm.$log = $log;
  }


  open() {
    let modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'updatesForm.html',
      controller: 'UpdatesFormCtrl'
    });

    modalInstance.result.then(() => {
      this.$log.info('Submitted Form');
    }, () => {
      this.$log.info('Modal dismissed at: ' + new Date());
    });
  }
}
