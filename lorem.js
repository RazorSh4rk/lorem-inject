(function() {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae ex vulputate, tristique neque ac, maximus nulla. Nulla odio velit, luctus sit amet ornare id, pretium non justo. Donec id mi id turpis eleifend vulputate. Ut maximus, nulla at tristique accumsan, augue nulla suscipit quam, ac efficitur nulla sapien lacinia orci. Suspendisse ullamcorper sed sem a placerat. Duis sed tempor lacus. Maecenas eleifend nec mi vel efficitur. Phasellus id nisl suscipit eros congue varius in varius mauris.Aliquam condimentum metus sed blandit volutpat. Integer at risus turpis. Cras magna magna, pellentesque vel interdum eu, vulputate tincidunt neque. Duis nisi sapien, porta eget nisl in, dapibus suscipit sapien. Maecenas venenatis est eget arcu dictum rhoncus. Aliquam posuere sem non luctus faucibus. Mauris iaculis faucibus lectus, vitae faucibus ante rutrum a. Cras a lacus turpis. Praesent id mauris non neque auctor fringilla vitae sed nulla. Sed eget est pharetra, feugiat orci consectetur, convallis augue.Ut et sem semper, porttitor risus sit amet, placerat arcu. Etiam imperdiet est nisl, eu laoreet nibh laoreet a. Nunc vehicula lacus congue metus accumsan laoreet. Ut non scelerisque ante. Aliquam erat volutpat. Integer pellentesque at est eget viverra. Fusce at metus eros. Sed vel condimentum sem.Vivamus convallis risus eget enim placerat accumsan. Praesent consequat blandit feugiat. Donec quis faucibus nulla. Vestibulum pretium sapien id erat scelerisque, at semper tellus sodales. Donec eget ligula eget libero aliquet imperdiet. Aenean eu dolor sit amet eros posuere pharetra nec et lacus. Morbi ut hendrerit elit, vitae interdum augue. Nam lobortis vehicula congue.Phasellus euismod auctor tincidunt. Mauris condimentum arcu velit, pharetra eleifend leo iaculis at. Proin rhoncus sed augue at ultrices. In odio enim, iaculis quis turpis in, ultrices laoreet enim. Integer quis gravida velit. Sed egestas diam et sapien dictum, et fringilla justo pretium. Aenean porta augue non sapien maximus pulvinar. Vivamus sit amet diam vitae dolor luctus gravida. Praesent pharetra augue ut diam aliquam auctor a id nibh.Nullam sagittis ut ligula nec pharetra. Nam dapibus laoreet nisl. Morbi nisi nunc, mollis sit amet odio vel, mollis tristique nunc. Sed semper auctor libero vel faucibus. Nunc sed viverra felis. Nunc at finibus dolor, non placerat felis. Pellentesque rhoncus mi vel sapien consectetur vehicula. Aliquam tempor eleifend metus a convallis. Fusce in libero ac tortor vulputate malesuada sed non leo. Nunc iaculis ante vitae mauris posuere, quis ullamcorper neque mollis. Phasellus iaculis, diam nec suscipit pellentesque, nulla tortor vulputate mi, a fermentum augue mi vitae odio. Suspendisse sodales maximus lacus, ac efficitur purus iaculis ut.Curabitur ultrices ultricies tellus quis sollicitudin. Etiam varius augue tortor, ut tempor sapien dictum non. Etiam ultrices ligula nunc, ac vestibulum orci tincidunt id. Ut finibus sodales vehicula. Etiam id tellus quis erat iaculis faucibus quis eget lorem. Quisque tincidunt ut ex in elementum. Donec aliquam quis sapien vitae sollicitudin. Integer lorem velit, ornare a dolor non, sagittis laoreet lectus. Sed consequat tincidunt scelerisque. Nullam auctor velit nisi, a volutpat ipsum blandit a. Etiam justo felis, tincidunt ac aliquet ac, dictum quis lorem. Mauris ornare leo nisi, sit amet tincidunt diam posuere quis. Nullam pellentesque mauris non turpis fringilla tempor. In congue luctus lorem a dictum. Cras eu euismod sapien. Proin sed laoreet diam.Etiam sollicitudin aliquam quam, vitae suscipit lorem luctus tempus. Pellentesque non orci gravida, blandit turpis vitae, luctus orci. Nulla feugiat lorem eget velit facilisis dapibus. Maecenas rhoncus mi ac lobortis pulvinar. Morbi mollis justo vel cursus volutpat. Mauris et rutrum quam, ut bibendum justo. Duis et feugiat erat, congue scelerisque arcu. Pellentesque semper sapien a mollis vehicula. Suspendisse eu erat eget risus interdum fringilla. Nulla facilisi. Quisque suscipit ipsum sit amet efficitur rhoncus. Fusce cursus lorem nec venenatis auctor.Aenean eget tincidunt nibh. Vestibulum consequat, magna vel lobortis condimentum, risus enim ullamcorper ligula, ut suscipit mi tellus sit amet nunc. Proin quis ex in magna tempus finibus. Donec a diam rutrum, euismod felis non, ullamcorper nisl. Aliquam id est porta, laoreet justo quis, hendrerit augue. Pellentesque vel ante quam. Pellentesque tristique nisl vitae ornare auctor. Donec ultrices nulla non purus dapibus hendrerit. Ut ultrices ligula vitae purus pharetra, imperdiet faucibus nisi suscipit. Morbi eleifend nulla sed nibh dictum vulputate eget eget metus. Aenean non gravida turpis. Aenean velit arcu, faucibus quis egestas porttitor, condimentum vitae quam.Aliquam erat volutpat. Nullam id scelerisque orci. Duis laoreet consectetur fringilla. Ut quam sapien, tempus ac turpis eu, venenatis placerat risus. Praesent congue nisi id sapien mollis maximus. Suspendisse sit amet tempus arcu, in dignissim dui. Duis ut sem pellentesque, imperdiet eros sed, placerat ipsum. Nunc laoreet vehicula lectus, porttitor aliquam sapien interdum at. Etiam vestibulum luctus nisl, et pretium felis gravida vitae. Nam nisl nulla, scelerisque sit amet arcu non, venenatis accumsan est.'

    window.onload = function() {
        document.getElementsByTagName('lorem').forEach((el) => {
            el.innerHTML = lorem.substring(0, getLength(el));
        })
    }

    function getLength(e) {
        const len = e.getAttribute('length');
        switch (len) {
            case null:
            case 1:
            case 'short':
                return 502;
            case 2:
            case 'medium':
                return 1020;
            case 3:
            case 'long':
                return 1322;
            default:
                return len;
        }
    }
})();