//Lorem
const text = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non orci faucibus, mattis lectus ut, fermentum leo. Mauris vulputate accumsan venenatis. Cras vitae ultricies augue. Curabitur ullamcorper imperdiet erat, placerat varius odio ullamcorper et. Vivamus lacus diam, lobortis non est non, congue consequat tellus. Suspendisse a lorem dolor. Fusce metus lectus, pulvinar vitae massa a, dictum mattis ante. Proin ultricies eros quis augue egestas sagittis sed vitae urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Morbi purus massa, vestibulum sit amet ultrices at, sagittis et urna. Suspendisse lacinia pharetra ante, nec posuere lacus faucibus id. Phasellus sit amet sapien et eros auctor elementum. Donec vitae mollis nunc, quis elementum elit.`,
    `Duis dignissim posuere magna, ac finibus nulla lacinia in. Nam at imperdiet lacus, a iaculis dui. Fusce in scelerisque ligula, vitae dapibus magna. Duis et venenatis sem, sit amet suscipit nibh. Ut est nunc, hendrerit dignissim diam vitae, suscipit convallis sapien. Praesent auctor odio vitae libero semper suscipit sit amet pulvinar quam. Donec elementum mattis leo ac pulvinar. Ut fringilla mi pellentesque, commodo dolor sit amet, vulputate metus. Nullam rhoncus nibh id varius molestie. Nulla diam libero, lacinia eget lorem ac, tempus facilisis mauris. Fusce sit amet mollis metus. Fusce sagittis dolor non dolor condimentum, eu sagittis nibh consectetur. Duis id arcu finibus, interdum mi dignissim, sollicitudin odio. Vestibulum nec metus congue, tincidunt eros non, pulvinar tortor. Fusce fringilla volutpat metus.`,
    `Aliquam efficitur libero non augue pulvinar hendrerit. Proin eu dapibus sapien, in interdum nisl. Nulla nibh urna, vestibulum et varius in, volutpat sed nisi. Fusce sit amet posuere purus. Vivamus at enim quis dui luctus pellentesque eget sed justo. Nullam eget nisl elementum nibh elementum sagittis sed in magna. Vestibulum euismod nibh quis suscipit tincidunt. Sed non arcu elit. Proin porttitor turpis et erat porttitor, vel tincidunt urna ornare. Suspendisse sed malesuada lorem. Curabitur et augue erat.`,
    `Nullam efficitur aliquet vulputate. Aenean aliquam mi in ultricies ornare. In nec nunc enim. Quisque elit justo, vestibulum nec lacus at, aliquam laoreet justo. Donec tempus nec enim sit amet mollis. Nulla varius gravida rutrum. Aenean luctus, orci vitae sagittis rhoncus, ex arcu ultrices nisl, eu viverra ex tellus vel lorem. Nullam rutrum ipsum at erat euismod, non pulvinar massa pulvinar. Morbi fermentum, erat at congue dictum, nisi purus finibus sapien, vitae molestie eros lorem id enim. Aenean ac venenatis est. Donec interdum in eros in ultricies. Integer sed facilisis est.`,
    `Etiam sagittis porta pharetra. Vivamus volutpat nisl ligula, non luctus neque congue vitae. Proin ac est ut mi faucibus mattis sed pellentesque metus. Nulla facilisi. In consectetur pulvinar fringilla. Nam lectus tellus, porta ut massa in, efficitur congue mi. Integer lacinia vitae magna pulvinar ultrices. Curabitur non diam gravida, accumsan justo id, varius nunc. Cras eu dictum odio.`
];

//declare

const outputArea = document.querySelector(".lorem-text");
const button = document.querySelector(".btn");
const amount = document.querySelector("#amount");



button.addEventListener("click", function (e) {
    e.preventDefault();
    outputArea.innerHTML = " "
    const value = parseInt(amount.value);
    if (value > 0 && value < 9) {
        for (let i = 0; i < value; i++) {
            outputArea.innerHTML +=
                `
            <div class="generated">
            ${text[Math.floor(Math.random() * 5)]}
            </div>
            `;
        }
    }
    if (value == 0) {
        outputArea.innerHTML = `<div class="generated"> <h1 class="alert"> Please add a value </h1> </div>`
    } else {
        outputArea.innerHTML = `<div class="generated"> <h1 class="alert"> Please add a value between 1 and 8 </h1> </div>`

    }

})