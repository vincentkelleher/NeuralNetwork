describe("A layer", function() {

    var layer;
    var previousLayer;

    beforeEach(function() {
        // Creating the previous layer
        previousLayer = new Layer(3);

        // Feed the previous layer's values
        previousLayer.neurons[0].output = 1;
        previousLayer.neurons[1].output = 0;
        previousLayer.neurons[2].output = 1;

        // Creating and linking the current layer
        layer = new Layer(4);
        layer.linkTo(previousLayer);

        // Setting the current layers' neurons' biases
        layer.neurons[0].bias = 0.23;
        layer.neurons[1].bias = 0.05;
        layer.neurons[2].bias = 0.74;
        layer.neurons[3].bias = 0.32;

        // Setting the current layers' neurons' synapses' weights
        layer.neurons[0].synapses[0].weight = 0.45;
        layer.neurons[0].synapses[1].weight = 0.34;
        layer.neurons[0].synapses[2].weight = 0.22;

        layer.neurons[1].synapses[0].weight = 0.99;
        layer.neurons[1].synapses[1].weight = 0.67;
        layer.neurons[1].synapses[2].weight = 0.01;

        layer.neurons[2].synapses[0].weight = 0.21;
        layer.neurons[2].synapses[1].weight = 0.56;
        layer.neurons[2].synapses[2].weight = 0.67;

        layer.neurons[3].synapses[0].weight = 0.09;
        layer.neurons[3].synapses[1].weight = 0.89;
        layer.neurons[3].synapses[2].weight = 0.34;
    });

    it("is linked to previous layer", function() {
        // Check the link
        for (var neuronIndex = 0; neuronIndex < layer.neurons.length; neuronIndex++) {
            var neuron = layer.neurons[neuronIndex];

            // Check the number of links
            expect(neuron.synapses.length).toEqual(previousLayer.neurons.length);

            // Check the synapses' neurons against the previous layer's neurons
            for (var previousNeuronIndex = 0; previousNeuronIndex < previousLayer.neurons.length; previousNeuronIndex++) {
                expect(neuron.synapses[previousNeuronIndex].neuron).toEqual(previousLayer.neurons[previousNeuronIndex]);
            }
        }
    });

    it("can forward compute it's neurons' outputs", function() {
        // Compute the current layer's neurons' output
        layer.computeNeuronOutputs();

        // Check the output values
        expect(layer.neurons[0].output).toEqual(0.4950001666600003);
        expect(layer.neurons[1].output).toEqual(0.7005671424739729);
        expect(layer.neurons[2].output).toEqual(0.20751005855963564);
        expect(layer.neurons[3].output).toEqual(0.3705168880326052);
    });
});